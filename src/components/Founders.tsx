export default function Founders() {
  return (
    <section className="py-16 px-6 bg-accent">
      <h2 className="text-3xl text-center font-semibold">
        Founders
      </h2>

      <div className="grid md:grid-cols-2 gap-10 mt-10 max-w-5xl mx-auto">
        {/* Apeksha */}
        <div className="text-center">
          <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto">
            <img 
              className="w-32 h-32 rounded-full object-cover"
              src="../../images/founders/apeksha.jpg" alt="Apeksha" />
          </div>
          <h3 className="mt-4 font-semibold text-lg">Apeksha</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Ex-P&G · Ex-L&T · IIM Mumbai (MBA)
            <br /> University of Washington (MBA)
          </p>
        </div>

        {/* Ullas */}
        <div className="text-center">
          <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto">
            <img 
              className="w-32 h-32 rounded-full object-cover"
              src="../../images/founders/ullas.jpg" alt="Ullas" />
          </div>
          <h3 className="mt-4 font-semibold text-lg">Ullas</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Ex-Microsoft · Ex-Accenture · IIM Ahmedabad (MBA)
            <br /> 10+ years in USA · Tech & Analytics Leader
          </p>
        </div>
      </div>
    </section>
  );
}