"use client";
import Link from "next/link";

const highlights = [
    {
        id: 1,
        name: "MacBook Pro",
        price: "$2000",
        image: "https://i.ibb.co/bRdtcZhZ/csm-IMG-7593-a97c65292f.webp",
    },
    {
        id: 2,
        name: "iPhone 15",
        price: "$1200",
        image: "https://i.ibb.co/Z6DGqWCL/iphone-15-pro-max-price-in-bangladesh-Mac-City-BD.webp",
    },
    {
        id: 3,
        name: "AirPods Pro",
        price: "$250",
        image: "https://i.ibb.co/Bkf2NB2/airpods-pro-2-usb-c-blue-background.webp",
    },
];

export default function ProductHighlights() {
    return (
        <section className="py-20 ">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Heading */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-12 text-center">
                    ✨ Featured Gadgets
                </h2>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {highlights.map((product) => (
                        <div
                            key={product.id}
                            className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center"
                        >
                            {/* Image */}
                            <div className="w-56 h-56 mb-6 overflow-hidden flex items-center justify-center">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Product Info */}
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {product.name}
                            </h3>
                            <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-6">
                                {product.price}
                            </p>

                            {/* Details Button */}
                            <Link
                                href={`/products/${product.id}`}
                                className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 hover:shadow-lg transition"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
