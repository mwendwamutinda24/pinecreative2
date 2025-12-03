export default function WhyChoose() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Why Choose <span className="text-orange-500">Pine</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              ⚡ Fast, Real-Time Delivery
            </h3>
            <p className="text-gray-600">
              We specialize in instant event content that fuels engagement while the buzz is still hot.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              💡 Authentic Storytelling
            </h3>
            <p className="text-gray-600">
              We create emotional connections that last beyond the scroll.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              🤝 Collaborative Process
            </h3>
            <p className="text-gray-600">
              We work closely with brands to ensure every piece feels true to their identity.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              🎬 High Production Value
            </h3>
            <p className="text-gray-600">
              Every project, big or small, gets cinematic quality and polish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
