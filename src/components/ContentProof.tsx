type MediaItem = {
  type: "youtube" | "instagram";
  url: string;
  thumbnail?: string;
  label: string;
};

const mediaItems: MediaItem[] = [
  // {
  //   type: "youtube",
  //   url: "https://www.youtube.com/embed/uRn07EAbEeg",
  //   label: "500K+ views · Used Prestige Air Fryer",
  // },
  {
    type: "instagram",
    url: "https://www.instagram.com/reels/C7Gj6Kxo0tu/",
    thumbnail: "/images/instagram/mudisnacks.png",
    label: "Dr. Oetker Veg Mayo Integration",
  },{
    type: "instagram",
    url: "https://www.instagram.com/reels/C7OWpORI_ff/",
    thumbnail: "/images/instagram/dosabattersnacks.png",
    label: "Prestige Dosa Tava integration",
  },{
    type: "instagram",
    url: "https://www.instagram.com/reels/C7W8DYQPtMT/",
    thumbnail: "/images/instagram/paneerbreadroll.png",
    label: "Nutrica Oil integration",
  },
  {
    type: "instagram",
    url: "https://www.instagram.com/reels/Crz3FPgMkbA/",
    thumbnail: "/images/instagram/vada.png",
    label: "Wonderchef Kadhai Integration",
  },{
    type: "instagram",
    url: "https://www.instagram.com/reels/DR_h6fZD6ix/",
    thumbnail: "/images/instagram/dumaloo.png",
    label: "Prestige Pressure Cooker integration",
  },{
    type: "instagram",
    url: "https://www.instagram.com/reels/DR30ZDBDz9_/",
    thumbnail: "/images/instagram/paneerpancake.png",
    label: "Prestige Mixer Grinder integration",
  },
];

export default function ContentProof() {
  return (
    <section className="py-16 px-6 bg-accent text-center">
      <h2 className="text-3xl font-semibold">
        Real Content. Real Engagement.
      </h2>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto px-4">
        {mediaItems.map((item, index) => (
          <div key={index} className="flex flex-col">

            {/* MEDIA */}
            <div className="aspect-9/16 max-w-100 overflow-hidden rounded-xl bg-black shadow-sm">

              {item.type === "youtube" ? (
                <iframe
                  className="w-full h-full border-0"
                  src={item.url}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full relative group"
                >
                  <img
                    src={item.thumbnail}
                    alt="Instagram Reel"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/80 text-black px-3 py-1 rounded-full text-sm font-medium">
                      ▶
                    </div>
                  </div>
                </a>
              )}
            </div>

            {/* LABEL */}
            <p className="text-sm mt-3 text-gray-700 font-medium px-1 text-center">
              {item.label}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}