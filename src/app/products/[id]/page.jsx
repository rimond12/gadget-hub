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
      <div className="max-w-3xl mx-auto px-6 py-12 min-h-[800px]">
        <h1 className="text-3xl font-bold text-red-600">Product not found</h1>
        <Link
          href="/products"
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Back to All Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 min-h-[800px]">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        {product.name}
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.image || "https://via.placeholder.com/300"}
          alt={product.name}
          className="w-full md:w-96 h-96 object-contain rounded-lg border"
        />
        <div className="flex-1">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {product.description}
          </p>
          <p className="text-gray-900 dark:text-white font-bold text-xl mb-4">
            Price: ${product.price}
          </p>
          <Link
            href="/products"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Back to All Products
          </Link>
        </div>
      </div>
    </div>
  );
}
