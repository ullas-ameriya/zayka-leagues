export default function Sponsors() {
  const sponsors = [
    { name: "Catch", image: "/images/sponsors/catch.png" },
    { name: "Prestige", image: "/images/sponsors/prestige.png" },
    { name: "Nutrica", image: "/images/sponsors/nutrica.png" },
    { name: "Dr Oetker", image: "/images/sponsors/dr-oetker.png" },
    { name: "Philips", image: "/images/sponsors/philips.svg" },
    { name: "WeiKFiELD", image: "/images/sponsors/weikfield.png" },
    { name: "Yours Freshly", image: "/images/sponsors/yours-freshly.png" },
    { name: "Akshayakalpa", image: "/images/sponsors/akshayakalpa.png" },
    { name: "Everest", image: "/images/sponsors/everest.png" },
    { name: "Wonderchef", image: "/images/sponsors/wonderchef.png" },
    { name: "P&G", image: "/images/sponsors/PnG.png" },
    { name: "Nutralite", image: "/images/sponsors/nutralite.png" },
    { name: "English Oven", image: "/images/sponsors/english-oven.png" },
    { name: "Pigeon", image: "/images/sponsors/pigeon.png" },
  ];
  const midPoint = Math.ceil(sponsors.length / 2);
  const firstRow = sponsors.slice(0, midPoint);
  const secondRow = sponsors.slice(midPoint);
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold">Past Sponsors</h2>

      {/* <div className="mt-10 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent z-10"></div>

        <div className="animate-marquee flex items-center gap-12">
          {[...sponsors, ...sponsors].map((s, i) => (
            <div key={i} className="shrink-0">
              <img 
                src={s.image} 
                alt={s.name} 
                className="w-32 h-auto transition-all" 
              />
            </div>
          ))}
        </div>
      </div> */}

      <div className="mt-10 flex flex-col gap-8"> {/* Container for both rows */}
    
        {/* First Row */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {firstRow.map((s, i) => (
            <div key={i} className="shrink-0">
              <img src={s.image} alt={s.name} className="w-32 h-auto" />
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {secondRow.map((s, i) => (
            <div key={i} className="shrink-0">
              <img src={s.image} alt={s.name} className="w-32 h-auto" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}