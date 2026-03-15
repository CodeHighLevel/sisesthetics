const testimonials = [
  {
    name: "Maria K.",
    text: "Amazing experience! Pavlinka transformed my hair completely. The color is perfect and the service was exceptional.",
    rating: 5
  },
  {
    name: "Elena P.",
    text: "Bela's manicure is always flawless. She takes her time and the results are worth every minute.",
    rating: 5
  },
  {
    name: "Sofia M.",
    text: "Radoslav is a true artist. My new haircut has received so many compliments!",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-display font-bold text-center text-[var(--neutral-900)] mb-12">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[var(--gold-500)]">★</span>
                ))}
              </div>
              <p className="text-[var(--neutral-600)] mb-4 italic">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-[var(--neutral-900)]">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}