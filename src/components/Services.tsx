const services = [
  {
    name: "Hair Coloring",
    description: "Professional coloring services with premium products",
    price: "From €80",
    duration: "2-3 hours"
  },
  {
    name: "Hair Styling",
    description: "Expert styling for any occasion",
    price: "From €50",
    duration: "45-90 min"
  },
  {
    name: "Hair Treatments",
    description: "Deep conditioning and repair treatments",
    price: "From €60",
    duration: "60 min"
  },
  {
    name: "Manicure",
    description: "Professional nail care and styling",
    price: "From €35",
    duration: "45 min"
  },
  {
    name: "Pedicure",
    description: "Complete foot care and nail services",
    price: "From €45",
    duration: "60 min"
  },
  {
    name: "Makeup",
    description: "Professional makeup application",
    price: "From €70",
    duration: "60-90 min"
  }
]

export function Services() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-display font-bold text-center text-[var(--neutral-900)] mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-display font-semibold text-[var(--neutral-900)] mb-3">
                {service.name}
              </h3>
              <p className="text-[var(--neutral-600)] mb-4">
                {service.description}
              </p>
              <div className="flex justify-between items-center text-sm text-[var(--neutral-500)]">
                <span>{service.price}</span>
                <span>{service.duration}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-8 py-4">
            View All Services
          </button>
        </div>
      </div>
    </section>
  )
}