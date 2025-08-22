"use client";
import Link from "next/link";


export default function Hero() {
    return (
        <section className="bg-gray-50 dark:bg-gray-800 py-20 ">
            <div className=" px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Welcome to GadgetHub
                </h1>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Explore the latest tech gadgets and manage your products easily.
                </p>
                <Link
                    href="/products"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    View Products
                </Link>
            </div>
        </section>
    );
}
