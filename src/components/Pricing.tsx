export default function Pricing() {
  const plans = [
    { name: "Title Sponsor", price: "₹7.5L" },
    { name: "Co-Sponsor", price: "₹5L" },
    { name: "Category Sponsor", price: "₹3L" },
  ];

  return (
    <section className="py-16 px-6 bg-accent text-center">
      <h2 className="text-3xl font-semibold">Partnership Options</h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
        {plans.map((p, i) => (
          <div key={i} className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="mt-4 text-2xl text-primary">{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}