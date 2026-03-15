export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[var(--neutral-50)] to-[var(--neutral-100)]">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-[var(--neutral-900)] mb-6">
          SIS ESTHETICS
        </h1>
        <p className="text-xl md:text-2xl text-[var(--neutral-600)] mb-8 max-w-2xl mx-auto">
          Beauty is a feeling. Experience luxury hair care with precision, creativity, and personalized attention.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary text-lg px-8 py-4">
            Book Appointment
          </button>
          <button className="btn-secondary text-lg px-8 py-4">
            View Services
          </button>
        </div>
      </div>
    </section>
  )
}