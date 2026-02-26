export default function Header({ onLoginClick }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 max-w-[1200px] mx-auto">
      <div className="flex items-center space-x-2">
        <img
          src="https://storage.googleapis.com/a1aa/image/a1d40330-4421-401f-927a-3e515dd5d07b.jpg"
          alt="Nolan logo, white stylized wave above the text 'NOLAN'"
          className="w-10 h-10 object-contain"
          width="40"
          height="40"
        />
        <span className="sr-only">Nolan</span>
      </div>
      <nav className="hidden md:flex space-x-8 font-semibold text-white text-sm">
        <a href="#" className="hover:underline">About Us</a>
        <a href="#" className="hover:underline">Pricing</a>
        <a href="#" className="hover:underline">Features</a>
        <a href="#" className="hover:underline">Blog</a>
        <a href="#" className="hover:underline">Education</a>
        <a href="#" className="hover:underline">Studios</a>
      </nav>
      <button
        onClick={onLoginClick}
        className="bg-white text-black font-semibold rounded-full px-5 py-2 text-sm hover:bg-gray-200 transition"
        type="button"
      >
        Log in
      </button>
    </header>
  );
}