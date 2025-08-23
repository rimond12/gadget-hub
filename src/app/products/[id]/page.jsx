import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import Link from "next/link";

async function fetchProduct(id) {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const product = await db
    .collection("products")
    .findOne({ _id: new ObjectId(id) });

  if (!product) return null;

  return {
    ...product,
    _id: product._id.toString(),
  };
}

export default async function ProductDetailsPage({ params }) {
  const { id } = params;
  const product = await fetchProduct(id);

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Product not found</h1>
        <Link
          href="/products"
          className="px-6 py-2 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition"
        >
          Back to All Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 min-h-screen">
      <div className="group flex flex-col md:flex-row gap-10 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition p-6 md:p-10">
        {/* Product Image */}
        <div className="flex-shrink-0 w-full md:w-96 h-96 overflow-hidden rounded-lg  flex items-center justify-center">
          <img
            src={product.image || "https://via.placeholder.com/400"}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-semibold mb-4 text-gray-900 dark:text-white">
              {product.name}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {product.description}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {product.details}
            </p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
              ${product.price}
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              href="/products"
              className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 hover:shadow-lg transition"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
