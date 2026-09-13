import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
            </span>
          </h1>

          <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-xl">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition-opacity cursor-pointer">
              Explore Technologies
            </button>
            <button className="border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <img
            src={bannerImg}
            alt="Development Stack Illustration"
            className="w-full max-w-md lg:max-w-lg object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;