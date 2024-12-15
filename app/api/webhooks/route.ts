import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { UserJSON, WebhookEvent } from '@clerk/nextjs/server'
import { initializeApp, getApps } from "firebase/app";
import { getFirestore, doc, setDoc, Timestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const db = getFirestore();


export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET

  if (!SIGNING_SECRET) {
    throw new Error('Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET)

  // Get headers
  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Missing Svix headers', {
      status: 400,
    })
  }

  // Get body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  let evt: WebhookEvent

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error: Could not verify webhook:', err)
    return new Response('Error: Verification error', {
      status: 400,
    })
  }

  // Do something with payload
  // For this guide, log payload to console
  const { id } = evt.data as { id: string };
  const eventType = evt.type
  console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
  console.log('Webhook payload:', body)

  try {
    if (eventType === "user.created" || eventType === "user.updated") {
      const userRef = doc(db, "users", id); // Use the Clerk user ID as the Firestore document ID
      function sanitizeData(data: UserJSON) {
        return JSON.parse(JSON.stringify(data, (key, value) => {
          if (typeof value === "undefined" || Number.isNaN(value)) return null;
          if (typeof value === "string" && value.trim() === "") return null; // Replace empty strings
          if (key.endsWith("_at") && typeof value === "number") {
            return Timestamp.fromMillis(value); // Convert timestamps
          }
          return value;
        }));
      }
    
      const sanitizedData = sanitizeData(evt.data);
      console.log(sanitizedData)
      setDoc(userRef, sanitizedData, { merge: true });
      console.log(`User ${id} successfully updated in Firebase.`);
    }
  } catch (error) {
    console.error("Error updating Firebase:", error);
    return new Response("Error updating Firebase", { status: 500 });
  }


  console.log("Webhook Recieved")

  return new Response('Webhook received', { status: 200 })
}