"use client";

import { useUser } from "@clerk/nextjs";

export default function ProtectedPage() {
    const { user, isLoaded } = useUser();

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>You need to sign in to view this page.</div>;
    }

    return <div>Welcome, {user.firstName}!</div>;
}
