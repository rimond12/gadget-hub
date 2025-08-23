// app/components/Navbar.jsx
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md  shadow-sm transition-colors">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          GadgetHub
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link
            href="/products"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Products
          </Link>

          {session ? (
            <>
              <Link
                href="/dashboard/add-product"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Dashboard
              </Link>
              <Link
                href="/api/auth/signout"
                className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Logout
              </Link>
            </>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
