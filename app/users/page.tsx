import { collection, getDocs } from "firebase/firestore";
import { db } from "@/src/lib/firebase";
import { User } from "@/src/lib/types";

export default function Home() {
    const fetchUsers = async (): Promise<User[]> => {
        const querySnapshot = await getDocs(collection(db, "users"));
        return querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        })) as User[];
    };

    return (
        <div>
            <h1>Fetch Firestore Data</h1>
            <button onClick={() => fetchUsers().then(console.log)}>
                Fetch Users
            </button>
        </div>
    );
}
