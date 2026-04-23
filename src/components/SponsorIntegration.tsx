export default function SponsorIntegration() {
  const tiers = [
    {
      title: "Title Sponsor",
      points: [
        "Product used in all videos",
        "Deep storytelling integration",
        "Multiple visibility moments",
      ],
    },
    {
      title: "Co-Sponsor",
      points: [
        "High visibility across episodes",
        "Thematic placements",
      ],
    },
    {
      title: "Category Sponsor",
      points: [
        "Contextual usage",
        "Targeted exposure",
      ],
    },
  ];

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl text-center font-semibold">
        Sponsor Integration
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto">
        {tiers.map((tier, i) => (
          <div key={i} className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold text-primary">
              {tier.title}
            </h3>
            <ul className="mt-4 text-gray-600 space-y-2">
              {tier.points.map((p, j) => (
                <li key={j}>• {p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}