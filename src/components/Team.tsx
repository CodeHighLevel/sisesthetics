const team = [
  {
    name: "Pavlinka Boteva",
    role: "Owner & Lead Specialist",
    bio: "25+ years in professional hair care, certified trichologist specializing in color matching and hair health.",
    specialties: ["Hair Coloring", "Hair Treatments", "Consultation"]
  },
  {
    name: "Radoslav Matev",
    role: "Hair Specialist & Stylist",
    bio: "Passionate about detail-oriented work and natural-looking results. Combines innovation with individual style.",
    specialties: ["Hair Styling", "Coloring", "Cutting"]
  },
  {
    name: "Bela Todorova",
    role: "Nail Specialist",
    bio: "6+ years in nail art and care with a bachelor's degree in design. Health and beauty go hand-in-hand.",
    specialties: ["Manicure", "Pedicure", "Nail Art"]
  }
]

export function Team() {
  return (
    <section className="py-20 px-4 bg-[var(--neutral-50)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-display font-bold text-center text-[var(--neutral-900)] mb-12">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="card text-center">
              <div className="w-24 h-24 bg-[var(--gold-100)] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-display text-[var(--gold-700)]">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-xl font-display font-semibold text-[var(--neutral-900)] mb-2">
                {member.name}
              </h3>
              <p className="text-[var(--gold-600)] font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-[var(--neutral-600)] mb-4">
                {member.bio}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {member.specialties.map((specialty, i) => (
                  <span key={i} className="bg-[var(--gold-100)] text-[var(--gold-700)] px-3 py-1 rounded-full text-sm">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}