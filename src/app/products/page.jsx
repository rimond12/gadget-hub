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
    <div className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-gray-900 dark:text-white">
        All Gadgets
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product._id}
            className="group bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center"
          >
            {/* Image */}
            <div className="w-48 h-48 mb-4 overflow-hidden rounded-lg flex items-center justify-center">
              <img
                src={product.image || "https://via.placeholder.com/150"}
                alt={product.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {product.name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2 line-clamp-2">
              {product.description}
            </p>
            <p className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-4">
              ${product.price}
            </p>

            {/* Details Button */}
            <Link
              href={`/products/${product._id}`}
              className="px-6 py-2 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 hover:shadow-lg transition"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
