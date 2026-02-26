export default function HeroSection({ onCreateClick }) {
  return (
    <main className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between mt-20 md:mt-32 gap-10 md:gap-0">
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-snug text-white">
          Bring your film project to life
          <br />
          from
          <span className="font-extrabold text-white ml-1 mr-1">idea</span> to
          <span className="font-extrabold text-white ml-1">production</span>
        </h1>
        <button
          onClick={onCreateClick}
          className="mt-8 bg-[#1e56ff] hover:bg-[#1a4de6] transition text-white font-extrabold rounded-full px-6 py-3 flex items-center gap-3 text-sm sm:text-base"
          type="button"
        >
          Start Creating
          <i className="fas fa-chevron-right text-lg"></i>
        </button>
      </div>
      <div className="relative max-w-xl w-full md:w-[600px]">
        <img
          src="https://storage.googleapis.com/a1aa/image/c42efbe1-a597-41d5-ce28-41a6f2d0c53a.jpg"
          alt="Man looking in mirror reflection in dark room, moody lighting"
          className="rounded-md shadow-[0_0_40px_#1e56ff]"
          width="600"
          height="350"
        />
        <div
          aria-hidden="true"
          className="absolute top-6 left-6 w-full h-full pointer-events-none rounded-md border border-[#1e56ff] opacity-20"
        ></div>
      </div>
    </main>
  );
}