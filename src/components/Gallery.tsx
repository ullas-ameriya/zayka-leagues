interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

const momPhotos: GalleryImage[] = [
  { id: 1, url: "../../images/moms/mom1.jpg", alt: "Apeksha and her Mom" },
  { id: 2, url: "../../images/moms/mom2.jpg", alt: "Ani Setia" },
  { id: 3, url: "../../images/moms/mom3.jpg", alt: "Neeta Ram" },
  { id: 4, url: "../../images/moms/mom4.jpg", alt: "Archana Chakravarty" },
  { id: 5, url: "../../images/moms/mom5.jpg", alt: "Reshma Rai" },
  { id: 6, url: "../../images/moms/mom6.jpg", alt: "Shveta Sheth" },
  { id: 7, url: "../../images/moms/mom7.jpg", alt: "Laxita Chauhan" },
  { id: 8, url: "../../images/moms/mom8.jpg", alt: "Neha Agarwal" },
];

export default function Gallery() {
  return (
    <section className="py-16 px-6 bg-accent text-center">
      <h2 className="text-3xl font-semibold text-primary">Moms from Our Leagues</h2>
      <p className="text-gray-500 mt-2">Celebrating the spirit of competition</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 max-w-6xl mx-auto">
        {momPhotos.map((photo) => (
          <div 
            key={photo.id} 
            className="group relative overflow-hidden rounded-2xl bg-gray-200 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            {/* Aspect Ratio Container (Portrait 3:4) */}
            <div className="aspect-3/4 w-full">
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-duration-700"
              />
            </div>

            {/* Premium Overlay on Hover */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-sm font-medium">{photo.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}