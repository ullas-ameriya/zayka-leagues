const stats = [
  { label: "Impressions per Season", value: "20M+" },
  { label: "Avg Views per Video", value: "500K" },
  { label: "Videos per League", value: "16+" },
  { label: "Cities Covered", value: "6" },
];

export default function Stats() {
  return (
    <section className="py-16 px-6 text-center">
      <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {stats.map((s, i) => (
          <div key={i}>
            <h2 className="text-3xl font-bold text-primary">{s.value}</h2>
            <p className="mt-2 text-gray-600">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}