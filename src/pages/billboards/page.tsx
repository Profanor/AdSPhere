import { motion } from "framer-motion";
import Header from "@/components/header";
import Background from "@/components/background";
import { Link } from "react-router-dom";

export default function BillboardsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center relative overflow-hidden">
      <Background />
      <Header />

      {/* Hero Section */}
      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center mt-20 max-w-4xl px-6 relative z-10"
      >
        <h1 className="text-5xl sm:text-7xl font-extrabold text-gray-900 leading-tight text-balance">
          Billboard{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Advertising
          </span>
        </h1>
        <p className="mt-8 text-xl text-gray-600 max-w-3xl leading-relaxed text-pretty">
          Dominate high-traffic locations with strategic billboard placements.
          Reach thousands of potential customers daily with premium outdoor
          advertising that drives real results.
        </p>
        <div className="mt-12 flex gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#locations"
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
          >
            View Locations
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-10 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg border border-gray-200"
          >
            Get Quote
          </motion.a>
        </div>
      </motion.main>

      {/* Key Benefits */}
      <section className="mt-32 max-w-6xl px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 text-balance">
            Why Billboard Advertising Works
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Strategic outdoor advertising that captures attention when it
            matters most
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-2xl">🏙️</span>
            </div>
            <h3 className="font-bold text-2xl text-gray-900 mb-3">
              Prime Locations
            </h3>
            <p className="text-gray-600 leading-relaxed">
              High-traffic highways, busy intersections, and downtown areas
              where your audience commutes daily.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-2xl">👁️</span>
            </div>
            <h3 className="font-bold text-2xl text-gray-900 mb-3">
              Maximum Visibility
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Large format displays that can't be ignored, blocked, or skipped.
              Your message reaches everyone who passes by.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="font-bold text-2xl text-gray-900 mb-3">
              Brand Recognition
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Build lasting brand awareness with repeated exposure to your
              target audience throughout their daily routines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategic Locations */}
      <section id="locations" className="mt-32 max-w-6xl px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 text-balance">
            Strategic Billboard Locations
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            We place your ads where they'll have the biggest impact on your
            target market
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <h3 className="text-3xl font-bold mb-4">Highway Corridors</h3>
            <p className="text-blue-100 leading-relaxed mb-6">
              Capture commuters during their daily travels with strategically
              placed billboards on major highways and interstates.
            </p>
            <ul className="space-y-2 text-blue-100">
              <li className="flex items-center">
                <span className="text-white mr-2">✓</span> 50,000+ daily
                impressions
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">✓</span> Extended viewing time
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">✓</span> Regional market reach
              </li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Urban Centers
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Dominate city centers, shopping districts, and business areas
              where your target customers work and shop.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> High-income
                demographics
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Foot traffic
                conversion
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Premium brand
                positioning
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="mt-32 max-w-6xl px-6 relative z-10">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl shadow-2xl text-white px-8 py-16 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 20px 20px, rgba(255, 255, 255, 0.1) 2px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
          <h2 className="text-4xl font-bold text-balance relative z-10 mb-12">
            Billboard Advertising Results
          </h2>

          <div className="grid gap-8 sm:grid-cols-3 relative z-10">
            <div>
              <div className="text-5xl font-extrabold text-white mb-2">85%</div>
              <p className="text-blue-100">Brand recall increase</p>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-white mb-2">
                3.2x
              </div>
              <p className="text-blue-100">Higher purchase intent</p>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-white mb-2">
                24/7
              </div>
              <p className="text-blue-100">Continuous exposure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        id="contact"
        className="mt-32 max-w-5xl px-6 text-center relative z-10"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-12 border border-white/20">
          <h3 className="text-4xl font-bold text-gray-900 text-balance mb-6">
            Ready to Dominate the Market?
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty mb-10">
            Get your brand in front of thousands of potential customers every
            day with strategic billboard placements that drive real results.
          </p>
          <div className="flex gap-6 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/#contact"
              className="px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
            >
              Get Custom Quote
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/"
                className="px-12 py-5 bg-gray-100 text-gray-800 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                View All Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 py-12 border-t border-gray-200 w-full max-w-6xl text-center text-gray-500 relative z-10">
        <p className="text-lg">
          © {new Date().getFullYear()} AdSphere. All rights reserved.
        </p>
        <p className="mt-3 text-gray-400">
          Built with ❤️ for advertisers and publishers worldwide.
        </p>
      </footer>
    </div>
  );
}
