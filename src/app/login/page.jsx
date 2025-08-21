"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
    return (
        <div className="max-w-md mx-auto px-6 py-12 min-h-[600px] flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-6">Login</h1>
            <button
                onClick={() => signIn("google", { callbackUrl: "/dashboard/add-product" })}
                className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Sign in with Google
            </button>
        </div>
    );
}
