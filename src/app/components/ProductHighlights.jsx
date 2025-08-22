"use client";
import Link from "next/link";


const highlights = [
    {
        id: 1,
        name: "MacBook Pro",
        price: "$2000",
        image: "https://i.ibb.co.com/bRdtcZhZ/csm-IMG-7593-a97c65292f.webp",
    },
    {
        id: 2,
        name: "iPhone 15",
        price: "$1200",
        image: "https://i.ibb.co.com/Z6DGqWCL/iphone-15-pro-max-price-in-bangladesh-Mac-City-BD.webp",
    },
    {
        id: 3,
        name: "AirPods Pro",
        price: "$250",
        image: "https://i.ibb.co.com/Bkf2NB2/airpods-pro-2-usb-c-blue-background.webp",
    },
];

export default function ProductHighlights() {
    return (
        <section className="py-20 bg-white dark:bg-gray-900 ">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
                    Featured Gadgets
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {highlights.map((product) => (
                        <div
                            key={product.id}
                            className="border rounded-lg p-4 flex flex-col items-center bg-gray-50 dark:bg-gray-800"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-40 h-40 object-contain mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {product.name}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">{product.price}</p>
                            <Link
                                href={`/products/${product.id}`}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            >
                                Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
