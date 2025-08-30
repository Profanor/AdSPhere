import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full max-w-6xl flex justify-between items-center py-6 px-6 relative z-10">
      <Link to="/" className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">A</span>
        </div>
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent tracking-tight">
          AdSphere
        </h1>
      </Link>
      <nav className="hidden sm:flex space-x-8 text-gray-700 font-medium">
        <Link
          to="/#features"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          Features
        </Link>
        <Link
          to="/billboards"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          Billboards
        </Link>
        <Link
          to="/influencers"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          Influencers
        </Link>
        <Link
          to="/#pricing"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          Pricing
        </Link>
        <Link
          to="/#contact"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          Contact
        </Link>
      </nav>
      <Link
        to="/#get-started"
        className="sm:block hidden px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold"
      >
        Get Started
      </Link>
    </header>
  );
}
