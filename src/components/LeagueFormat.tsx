export default function LeagueFormat() {
  return (
    <section className="py-16 px-6 bg-accent text-center">
      <h2 className="text-3xl font-semibold">How the League Works</h2>

      <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-3 gap-6 md:divide-x divide-gray-300">
        <div>
          <h3 className="font-semibold text-primary">League Stage</h3>
          <p className="text-gray-600 mt-2">
            6 cities · 12 videos · Engagement driven competition
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-primary">Finals</h3>
          <p className="text-gray-600 mt-2">
            Top 2 moms compete in high-stakes finale
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-primary">Winner</h3>
          <p className="text-gray-600 mt-2">
            Decided by views, shares & engagement
          </p>
        </div>
      </div>
    </section>
  );
}