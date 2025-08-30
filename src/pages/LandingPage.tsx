import { motion } from "framer-motion";
import Header from "@/components/header";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(99, 102, 241, 0.1) 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <Header />

      {/* Hero Section */}
      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center mt-20 max-w-4xl px-6 relative z-10"
      >
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-sm"
        ></motion.div>
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -top-5 -right-15 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-sm"
        ></motion.div>

        <h2 className="text-5xl sm:text-7xl font-extrabold text-gray-900 leading-tight text-balance">
          Smarter Ads,{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Better Reach
          </span>
        </h2>
        <p className="mt-8 text-xl text-gray-600 max-w-3xl leading-relaxed text-pretty">
          Launch and manage ad campaigns in minutes. Track performance, reach
          the right audience, and maximize your ROI with a platform built for
          exponential growth.
        </p>
        <div className="mt-12 flex gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#get-started"
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
          >
            Start Free Trial
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#demo"
            className="px-10 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg border border-gray-200"
          >
            Watch Demo
          </motion.a>
        </div>
      </motion.main>

      {/* Features Section */}
      <section
        id="features"
        className="mt-32 grid gap-8 sm:grid-cols-3 max-w-6xl px-6 relative z-10"
      >
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-300"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
            <span className="text-2xl">🚀</span>
          </div>
          <h3 className="font-bold text-2xl text-gray-900 mb-3">
            Easy Campaigns
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Set up campaigns quickly with our intuitive dashboard. Focus less on
            setup and more on results that drive growth.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-300"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="font-bold text-2xl text-gray-900 mb-3">
            Real-time Analytics
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Track impressions, clicks, and conversions instantly with dashboards
            that make sense and drive decisions.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-300"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
            <span className="text-2xl">🎯</span>
          </div>
          <h3 className="font-bold text-2xl text-gray-900 mb-3">
            Smart Targeting
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Reach the right audience at the right time with advanced AI-driven
            targeting options that maximize ROI.
          </p>
        </motion.div>
      </section>

      {/* Advertising Solutions */}
      <section className="mt-32 max-w-6xl px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 text-balance">
            Our Advertising Solutions
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            From digital campaigns to outdoor advertising and influencer
            partnerships
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-2xl">🏙️</span>
            </div>
            <h3 className="text-3xl font-bold mb-4">Billboard Advertising</h3>
            <p className="text-blue-100 leading-relaxed mb-6">
              Dominate high-traffic locations with strategic billboard
              placements. Reach thousands of potential customers daily with
              premium outdoor advertising.
            </p>
            <Link
              to="/billboards"
              className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              Learn More
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Influencer Collaborations
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Partner with top influencers to amplify your brand message.
              Authentic endorsements that build trust and drive conversions.
            </p>
            <Link
              to="/influencers"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Explore Partnerships
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="mt-32 max-w-6xl px-6 text-center relative z-10"
      >
        <h2 className="text-5xl font-extrabold text-gray-900 text-balance">
          Pricing Plans
        </h2>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
          Choose the plan that suits your needs. Simple, transparent pricing
          with no hidden fees and maximum value.
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {/* Basic */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 flex flex-col transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900">Starter</h3>
            <p className="mt-4 text-5xl font-bold text-gray-900">Free</p>
            <ul className="mt-8 space-y-4 text-gray-600 flex-1">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> Up to 1 campaign
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> 1,000
                impressions / month
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> Basic analytics
              </li>
            </ul>
            <a
              href="#get-started"
              className="mt-8 px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-full hover:from-gray-700 hover:to-gray-800 transition-all duration-300 font-semibold"
            >
              Get Started
            </a>
          </motion.div>

          {/* Pro */}
          <motion.div
            whileHover={{ scale: 1.08, y: -10 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 flex flex-col transition-all duration-300 transform relative"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-full text-sm font-bold">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-white">Pro</h3>
            <p className="mt-4 text-5xl font-bold text-white">
              $49<span className="text-xl text-blue-100">/mo</span>
            </p>
            <ul className="mt-8 space-y-4 text-blue-100 flex-1">
              <li className="flex items-center">
                <span className="text-white mr-2">✔️</span> Unlimited campaigns
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">✔️</span> 100,000 impressions
                / month
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">✔️</span> Advanced analytics
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">✔️</span> Priority support
              </li>
            </ul>
            <a
              href="#get-started"
              className="mt-8 px-8 py-4 bg-white text-blue-700 rounded-full hover:bg-gray-100 transition-all duration-300 font-bold shadow-lg"
            >
              Upgrade to Pro
            </a>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 flex flex-col transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
            <p className="mt-4 text-5xl font-bold text-gray-900">Custom</p>
            <ul className="mt-8 space-y-4 text-gray-600 flex-1">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> Unlimited
                campaigns
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> Millions of
                impressions
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> Dedicated
                account manager
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> Custom
                integrations
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold"
            >
              Contact Sales
            </a>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-32 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl shadow-2xl text-white w-full max-w-5xl px-8 py-20 text-center relative z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, rgba(255, 255, 255, 0.1) 2px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
        <h3 className="text-4xl font-bold text-balance relative z-10">
          Ready to grow your business?
        </h3>
        <p className="mt-6 text-blue-100 max-w-3xl mx-auto text-lg leading-relaxed text-pretty relative z-10">
          Join AdSphere today and take your advertising strategy to the next
          level with better targeting, insights, and ROI that drives real
          results.
        </p>
        <div className="mt-10 relative z-10">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#get-started"
            className="px-12 py-5 bg-white text-blue-700 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
          >
            Get Started Now
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="mt-24 py-12 border-t border-gray-200 w-full max-w-6xl text-center text-gray-500 relative z-10"
      >
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
