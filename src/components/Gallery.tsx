const galleryImages = [
  { src: "/api/placeholder/400/300", alt: "Hair styling example" },
  { src: "/api/placeholder/400/300", alt: "Nail art work" },
  { src: "/api/placeholder/400/300", alt: "Before/after transformation" },
  { src: "/api/placeholder/400/300", alt: "Salon interior" },
  { src: "/api/placeholder/400/300", alt: "Makeup application" },
  { src: "/api/placeholder/400/300", alt: "Hair coloring result" }
]

export function Gallery() {
  return (
    <section className="py-20 px-4 bg-[var(--neutral-50)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-display font-bold text-center text-[var(--neutral-900)] mb-12">
          Our Work
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="btn-secondary text-lg px-8 py-4">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  )
}