// app/components/Navbar.jsx
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route"; 

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="w-full border-b px-6 py-3 bg-white dark:bg-gray-900 shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 dark:text-white"
        >
          GadgetHub
        </Link>

        {/* Links */}
        <div className="flex items-center gap-4">
          <Link
            href="/products"
            className="text-gray-700 dark:text-gray-200 hover:underline"
          >
            Products
          </Link>

          {session ? (
            <>
              <Link
                href="/dashboard/add-product"
                className="text-gray-700 dark:text-gray-200 hover:underline"
              >
                Dashboard
              </Link>
              <Link
                href="/api/auth/signout"
                className="px-3 py-1 border rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Logout
              </Link>
            </>
          ) : (
            <Link
              href="/login"
              className="px-3 py-1 border rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
