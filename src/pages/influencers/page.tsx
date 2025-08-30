"use client";

import { motion } from "framer-motion";
import Header from "@/components/header";
import Background from "@/components/background";
import { Link } from "react-router-dom";

export default function InfluencersPage() {
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
          Influencer{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Collaborations
          </span>
        </h1>
        <p className="mt-8 text-xl text-gray-600 max-w-3xl leading-relaxed text-pretty">
          Partner with top influencers to amplify your brand message. Authentic
          endorsements that build trust and drive conversions through genuine
          audience connections.
        </p>

        <div className="mt-12 mb-8 relative">
          <img
            src="/authentic-content-creator-filming-product-review-i.png"
            alt="Content creator filming authentic product review in professional studio"
            className="rounded-2xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
        </div>

        <div className="mt-8 flex gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#partnerships"
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
          >
            View Partnerships
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-10 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg border border-gray-200"
          >
            Start Collaboration
          </motion.a>
        </div>
      </motion.main>

      {/* Why Influencer Marketing */}
      <section className="mt-32 max-w-6xl px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 text-balance">
            Why Influencer Marketing Works
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Authentic connections that turn followers into customers
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="font-bold text-2xl text-gray-900 mb-3">
              Authentic Trust
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Influencers have built genuine relationships with their audiences,
              creating trust that traditional ads can't match.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-bold text-2xl text-gray-900 mb-3">
              Targeted Reach
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Access specific demographics and niche markets through influencers
              who already engage your ideal customers.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="font-bold text-2xl text-gray-900 mb-3">
              Content Creation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Professional content creators who know how to showcase your
              products in engaging, shareable formats.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="partnerships" className="mt-32 max-w-6xl px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 text-balance">
            Partnership Opportunities
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            From micro-influencers to celebrity endorsements, we match you with
            the perfect partners
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <h3 className="text-2xl font-bold mb-4">Micro-Influencers</h3>
            <p className="text-blue-100 leading-relaxed mb-6">
              High engagement rates with niche audiences. Perfect for targeted
              campaigns and authentic product reviews.
            </p>
            <div className="text-3xl font-bold text-white">10K-100K</div>
            <p className="text-blue-100 text-sm">Followers</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Macro-Influencers
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Broad reach with established personal brands. Ideal for awareness
              campaigns and product launches.
            </p>
            <div className="text-3xl font-bold text-gray-900">100K-1M</div>
            <p className="text-gray-600 text-sm">Followers</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <h3 className="text-2xl font-bold mb-4">Celebrity Partners</h3>
            <p className="text-purple-100 leading-relaxed mb-6">
              Maximum visibility and brand prestige. Perfect for major campaigns
              and brand positioning.
            </p>
            <div className="text-3xl font-bold text-white">1M+</div>
            <p className="text-purple-100 text-sm">Followers</p>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="mt-32 max-w-6xl px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 text-balance">
            Success Stories
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Real results from our influencer partnerships
          </p>
        </div>

        <div className="mb-12 text-center">
          <img
            src="/diverse-group-of-content-creators-collaborating-in.png"
            alt="Diverse content creators collaborating in modern workspace"
            className="rounded-2xl shadow-xl mx-auto"
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Fashion Brand Campaign
                </h3>
                <p className="text-gray-600">Lifestyle & Fashion Influencers</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="text-3xl font-bold text-blue-600">340%</div>
                <p className="text-gray-600 text-sm">ROI Increase</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">2.8M</div>
                <p className="text-gray-600 text-sm">Total Reach</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Partnered with 15 fashion influencers for a summer collection
              launch, resulting in sold-out inventory within 48 hours.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Tech Product Launch
                </h3>
                <p className="text-gray-600">Tech & Gaming Influencers</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="text-3xl font-bold text-purple-600">180%</div>
                <p className="text-gray-600 text-sm">Sales Boost</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600">1.2M</div>
                <p className="text-gray-600 text-sm">Video Views</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Collaborated with tech reviewers and gaming influencers for a new
              gadget launch, achieving record pre-order numbers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Campaign Types */}
      <section className="mt-32 max-w-6xl px-6 relative z-10">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl shadow-2xl text-white px-8 py-16 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 20px 20px, rgba(255, 255, 255, 0.1) 2px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-4xl font-bold text-balance">
              Campaign Types We Offer
            </h2>
            <p className="mt-4 text-blue-100 text-lg">
              Tailored strategies for every marketing goal
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
            <div className="text-center">
              <div className="text-3xl mb-3">📸</div>
              <h3 className="font-bold text-lg mb-2">Sponsored Posts</h3>
              <p className="text-blue-100 text-sm">
                Product showcases and brand mentions
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎥</div>
              <h3 className="font-bold text-lg mb-2">Video Reviews</h3>
              <p className="text-blue-100 text-sm">
                In-depth product demonstrations
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold text-lg mb-2">Story Takeovers</h3>
              <p className="text-blue-100 text-sm">
                Behind-the-scenes brand experiences
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎉</div>
              <h3 className="font-bold text-lg mb-2">Event Partnerships</h3>
              <p className="text-blue-100 text-sm">
                Live coverage and brand activations
              </p>
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
            Ready to Partner with Influencers?
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty mb-10">
            Connect with the perfect influencers for your brand. Let's create
            authentic partnerships that drive real results and build lasting
            customer relationships.
          </p>
          <div className="flex gap-6 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/#contact"
              className="px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
            >
              Contact Us Today
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
