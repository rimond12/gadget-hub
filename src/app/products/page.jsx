import Link from "next/link";
import clientPromise from "@/lib/mongodb";

async function fetchProducts() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

 
  const products = await db.collection("products").find({}).toArray();

  
  return products.map((p) => ({
    ...p,
    _id: p._id.toString(),
  }));
}

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 min-h-[800px]">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        All Gadgets
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg p-4 flex flex-col items-center bg-gray-50 dark:bg-gray-800 shadow hover:shadow-lg transition"
          >
            <img
              src={product.image || "https://via.placeholder.com/150"}
              alt={product.name}
              className="w-40 h-40 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {product.name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {product.description}
            </p>
            <p className="text-gray-900 dark:text-white font-bold mb-4">
              ${product.price}
            </p>
            <Link
              href={`/products/${product._id}`}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
