import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            GadgetHub
          </span>
          . All rights reserved.
        </p>

        {/* Center Navigation */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link
            href="/products"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Products
          </Link>
          <Link
            href="/dashboard/add-product"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Dashboard
          </Link>
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}
