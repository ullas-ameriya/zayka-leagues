export default function PlatformsDetailed() {
  const platforms = [
    {
      name: "Zayka Ka Tadka .(Facebook)",
      followers: "6.3M",
      link: "https://www.facebook.com/Zaykakatadka/",
    },
    {
      name: "5 Min Veg Recipes (Facebook)",
      followers: "1.2M",
      link: "https://www.facebook.com/5minutevegrecipes/",
    },
    {
      name: "YouTube",
      followers: "1M",
      link: "https://www.youtube.com/c/zaykakatadka",
    },
    {
      name: "Instagram",
      followers: "1.2M",
      link: "https://www.instagram.com/zaykakatadka/reels/",
    },
    {
      name: "Zayka Ka Tadka Group (Facebook)",
      followers: "500K",
      link: "https://www.facebook.com/groups/847711728602764/",
    },
  ];

  return (
    <section className="py-12 px-6 text-center">
      <h2 className="text-2xl font-semibold">Our Platform Reach</h2>

      <div className="grid md:grid-cols-4 gap-6 mt-8 max-w-5xl mx-auto">
        {platforms.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            className="border rounded-xl p-4 hover:shadow-md transition"
          >
            <p className="text-primary font-semibold text-xl">
              {p.followers}
            </p>
            <p className="text-gray-600 mt-1">{p.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
}