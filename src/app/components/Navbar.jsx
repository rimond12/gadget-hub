import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b px-6 py-3  bg-white dark:bg-gray-900">
     <div className="flex justify-between items-center max-w-7xl mx-auto ">
         {/* Logo / Brand */}
      <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
        GadgetHub
      </Link>

      {/* Links */}
      <div className="flex items-center gap-4">
        <Link href="/products" className="text-gray-700 dark:text-gray-200 hover:underline">
          Products
        </Link>
        <Link href="/dashboard/add-product" className="text-gray-700 dark:text-gray-200 hover:underline">
          Dashboard
        </Link>
        <Link href="/login" className="px-3 py-1 border rounded text-gray-700 dark:text-gray-200">
          Login
        </Link>
      </div>
     </div>
    </nav>
  );
}
