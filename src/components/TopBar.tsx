export default function TopBar() {
  return (
    <div className="w-full border-b bg-white px-6 py-3 flex justify-between items-center">
      
      <div className="flex items-center gap-3">
          <a href="#" >
            <img 
              src="/images/logo.png" 
              alt="Zayka Ka Tadka" 
              className="h-8 w-8 md:h-10 md:w-10 object-contain"
            />
          </a>
          <h1 className="font-semibold text-lg">
            <a href="#">Zayka Ka Tadka</a>
          </h1>
        </div>

      <div className="text-sm text-gray-600">
        <span className="font-semibold text-primary">10M+ Followers</span> across platforms
      </div>
    </div>
  );
}