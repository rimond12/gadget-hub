export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left */}
        <p className="text-sm">&copy; {new Date().getFullYear()} GadgetHub. All rights reserved.</p>

        {/* Center */}
        <div className="flex gap-4">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>

        {/* Right */}
        <p className="text-sm">Made with ❤️ by You</p>
      </div>
    </footer>
  );
}
