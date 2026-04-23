export default function Demographics() {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold">
        Audience Snapshot
      </h2>

      <div className="mt-8 max-w-3xl mx-auto space-y-3 text-gray-600">
  <p>Majority Women · 25–45 age group</p>
  <p>Primary decision makers for household food purchases</p>
  <p>Strong presence across Tier 1, 2 & 3 cities</p>
  <p>Highly engaged cooking & recipe-focused audience</p>
</div>

<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10">
  {/* Facebook Card */}
  <div className="flex flex-col group">
    <div className="h-64 w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
       <img 
         src="../../images/demographics/facebook.jpg" 
         alt="Facebook Demographics" 
         className="w-full min-h-full h-auto object-top transition-transform duration-3000 ease-in-out group-hover:-translate-y-[calc(100%-16rem)]"
       />
    </div>
    <p className="mt-2 text-sm text-gray-500 font-medium">Facebook</p>
  </div>

  {/* Instagram Card */}
  <div className="flex flex-col group">
    <div className="h-64 w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
       <img 
         src="../../images/demographics/instagram.jpg" 
         alt="Instagram Demographics" 
         className="w-full min-h-full h-auto object-top transition-transform duration-3000 ease-in-out group-hover:-translate-y-[calc(100%-16rem)]"
       />
    </div>
    <p className="mt-2 text-sm text-gray-500 font-medium">Instagram</p>
  </div>
</div>
    </section>
  );
}