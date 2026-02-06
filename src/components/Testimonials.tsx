export default function Testimonials() {
  const testimonials = [
    {
      quote: "We switched and cut our inference costs by XXx while getting faster responses. It's been transformative for our product.",
      author: "Person A",
      role: "CTO @ Company A",
      initial: "A",
    },
    {
      quote: "The latency improvements were immediately noticeable. Our users love how responsive our AI features are now.",
      author: "Person B",
      role: "CEO @ Company B",
      initial: "B",
    },
    {
      quote: "Finally, an AI API that scales with us. We've processed billions of tokens without a single issue.",
      author: "Person C",
      role: "Head of Engineering @ Company C",
      initial: "C",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-gray-900">
            What others say about LemanLabs
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="card p-8"
            >
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-200 to-peach-300 flex items-center justify-center">
                  <span className="text-orange-700 font-semibold">{testimonial.initial}</span>
                </div>
                <div>
                  <p className="text-gray-900 font-medium">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
