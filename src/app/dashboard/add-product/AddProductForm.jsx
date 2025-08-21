"use client";

import { useSession, signIn } from "next-auth/react";
import AddProductForm from "./AddProductForm";

export default function AddProductPageWrapper() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return (
            <div className="p-6 text-center">
                <p>Loading...</p>
            </div>
        );
    }

    if (!session) {
        return (
            <div className="p-6 max-w-md mx-auto text-center">
                <h2 className="text-xl font-bold mb-4">Access Denied</h2>
                <p className="mb-4">You must be logged in to add a product.</p>
                <button
                    onClick={() => signIn("google")}
                    className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Sign in with Google
                </button>
            </div>
        );
    }

    return <AddProductForm />;
}
