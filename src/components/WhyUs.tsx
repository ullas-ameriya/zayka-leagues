export default function WhyUs() {
  const points = [
    "Deep reach among women 30+ decision makers",
    "Raw, unscripted content builds trust",
    "High recall through repeat exposure",
    "Trusted by tens of brands across categories",
  ];

  return (
    <section className="py-16 px-6 bg-accent text-center">
      <h2 className="text-3xl font-semibold">Why Brands Choose Us</h2>

      <div className="mt-10 max-w-3xl mx-auto space-y-4">
        {points.map((p, i) => (
          <p key={i} className="text-gray-700">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}