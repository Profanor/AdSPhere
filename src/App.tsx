import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-100 via-white to-blue-50">
      {/* Header */}
      <header className="w-full max-w-6xl flex justify-between items-center py-6 px-6">
        <h1 className="text-3xl font-extrabold text-blue-700 tracking-tight">
          AdSphere
        </h1>
        <nav className="hidden sm:flex space-x-8 text-gray-700 font-medium">
          <a href="#features" className="hover:text-blue-600 transition">
            Features
          </a>
          <a href="#pricing" className="hover:text-blue-600 transition">
            Pricing
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </nav>
        <a
          href="#get-started"
          className="sm:block hidden px-5 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </header>

      {/* Hero Section */}
      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center mt-20 max-w-3xl px-6"
      >
        <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
          Smarter Ads, <span className="text-blue-600">Better Reach</span>
        </h2>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Launch and manage ad campaigns in minutes. Track performance, reach
          the right audience, and maximize your ROI with a platform built for
          growth.
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="#get-started"
            className="px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition font-semibold"
          >
            Start Free Trial
          </a>
          <a
            href="#demo"
            className="px-8 py-4 bg-gray-100 text-gray-800 rounded-full shadow hover:bg-gray-200 transition font-semibold"
          >
            Watch Demo
          </a>
        </div>
      </motion.main>

      {/* Features Section */}
      <section
        id="features"
        className="mt-28 grid gap-10 sm:grid-cols-3 max-w-6xl px-6"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
        >
          <h3 className="font-semibold text-xl text-blue-700">
            🚀 Easy Campaigns
          </h3>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            Set up campaigns quickly with our intuitive dashboard. Focus less on
            setup and more on results.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
        >
          <h3 className="font-semibold text-xl text-blue-700">
            📊 Real-time Analytics
          </h3>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            Track impressions, clicks, and conversions instantly with dashboards
            that make sense.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
        >
          <h3 className="font-semibold text-xl text-blue-700">
            🎯 Smart Targeting
          </h3>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            Reach the right audience at the right time with advanced AI-driven
            targeting options.
          </p>
        </motion.div>
      </section>

      {/* Pricing Section */}
      {/* Pricing Section */}
      <section id="pricing" className="mt-28 max-w-6xl px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">Pricing Plans</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Choose the plan that suits your needs. Simple, transparent pricing
          with no hidden fees.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {/* Basic */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col transition"
          >
            <h3 className="text-xl font-semibold text-blue-700">Starter</h3>
            <p className="mt-4 text-4xl font-bold text-gray-900">Free</p>
            <ul className="mt-6 space-y-3 text-gray-600 text-sm flex-1">
              <li>✔️ Up to 1 campaign</li>
              <li>✔️ 1,000 impressions / month</li>
              <li>✔️ Basic analytics</li>
            </ul>
            <a
              href="#get-started"
              className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-semibold"
            >
              Get Started
            </a>
          </motion.div>

          {/* Pro */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="bg-white rounded-2xl shadow-xl border-2 border-blue-600 p-8 flex flex-col transition transform"
          >
            <h3 className="text-xl font-semibold text-blue-700">Pro</h3>
            <p className="mt-4 text-4xl font-bold text-gray-900">
              $49<span className="text-lg text-gray-500">/mo</span>
            </p>
            <ul className="mt-6 space-y-3 text-gray-600 text-sm flex-1">
              <li>✔️ Unlimited campaigns</li>
              <li>✔️ 100,000 impressions / month</li>
              <li>✔️ Advanced analytics</li>
              <li>✔️ Priority support</li>
            </ul>
            <a
              href="#get-started"
              className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-semibold"
            >
              Upgrade to Pro
            </a>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col transition"
          >
            <h3 className="text-xl font-semibold text-blue-700">Enterprise</h3>
            <p className="mt-4 text-4xl font-bold text-gray-900">Custom</p>
            <ul className="mt-6 space-y-3 text-gray-600 text-sm flex-1">
              <li>✔️ Unlimited campaigns</li>
              <li>✔️ Millions of impressions</li>
              <li>✔️ Dedicated account manager</li>
              <li>✔️ Custom integrations</li>
            </ul>
            <a
              href="#contact"
              className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-semibold"
            >
              Contact Sales
            </a>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-28 bg-blue-600 rounded-3xl shadow-xl text-white w-full max-w-5xl px-8 py-16 text-center">
        <h3 className="text-3xl font-bold">Ready to grow your business?</h3>
        <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
          Join AdSphere today and take your advertising strategy to the next
          level with better targeting, insights, and ROI.
        </p>
        <div className="mt-8">
          <a
            href="#get-started"
            className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-full shadow hover:bg-gray-100 transition"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="mt-20 py-8 border-t w-full max-w-6xl text-center text-gray-500 text-sm"
      >
        <p>© {new Date().getFullYear()} AdSphere. All rights reserved.</p>
        <p className="mt-2">Built with ❤️ for advertisers and publishers.</p>
      </footer>
    </div>
  );
}
