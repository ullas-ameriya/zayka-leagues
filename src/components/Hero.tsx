import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

const images = [
  "/images/hero/hero1.jpg",
  "/images/hero/hero2.jpg",
  "/images/hero/hero3.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 5000); // slower = premium feel

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">

      {/* Background Images with Fade + Zoom */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className={`absolute w-full h-full object-cover transition-all duration-2000 ${
            i === index
              ? "opacity-100 scale-105"
              : "opacity-0 scale-100"
          }`}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">

        <p className="tracking-widest text-5xl mb-8 opacity-80 px-4 py-2 rounded">
          India’s Most Authentic Home Kitchen League
        </p>

        <p className="text-xl md:text-2xl font-light mb-8 leading-tight bg-black/10 px-4 py-2 rounded">
          20M+ impressions per season · Real moms · Real kitchens · Real influence
        </p>
        
        <a 
        href="https://wa.me/917622014780"
        target="_blank"
        className="border border-white px-8 py-3 text-sm tracking-wide hover:bg-blue-700 hover:text-white transition-all duration-300 rounded">
          Partner With Us
        </a>

      </div>
    </section>
  );
}