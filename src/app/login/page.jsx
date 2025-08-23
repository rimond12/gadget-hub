"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-6">
            <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center">
                <h1 className="text-3xl font-extrabold mb-8 text-gray-900 dark:text-white">
                    Login to GadgetHub
                </h1>

                <button
                    onClick={() => signIn("google", { callbackUrl: "/products" })}
                    className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 font-semibold rounded-2xl shadow hover:shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                >
                    <FcGoogle className="text-2xl" />
                    Sign in with Google
                </button>

                <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
                    By signing in, you agree to our{" "}
                    <a href="#" className="underline hover:text-blue-600">
                        Terms & Conditions
                    </a>
                </p>
            </div>
        </div>
    );
}
