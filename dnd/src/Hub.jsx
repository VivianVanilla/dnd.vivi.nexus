import { Link } from "react-router";

function Hub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-950 to-slate-900 flex flex-col items-center py-6 px-1 sm:px-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-100 drop-shadow-lg mb-2 animate-bounce tracking-wide">
        Viv's Nexus
      </h1>
      <h2 className="text-base sm:text-lg text-white-900 bg-white/10 rounded-xl px-3 sm:px-6 py-2 sm:py-3 shadow-md mb-6 max-w-2xl text-center">
        Welcome to my Homesite. This will be a collection of all of my web content and personal projects.
      </h2>

      <div className="w-full max-w-4xl">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-100 mb-6 text-center">My Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* D&D Homebrew Card */}
          <Link to="/dnd" className="block">
            <div className="bg-gradient-to-br bg-blue-950 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 h-full flex flex-col">
              <div className="bg-gradient-to-br from-black to-slate-700 rounded-lg h-32 mb-4 flex items-center justify-center">
                <span className="text-white text-4xl">⚔️</span>
              </div>
              <h4 className="text-lg font-semibold text-blue-100 mb-2">D&D Homebrew</h4>
              <p className="text-blue-200 text-sm flex-grow">Explore custom feats, classes, races, and more for your Dungeons & Dragons campaigns.</p>
            </div>
          </Link>

          {/* Thieves' Key Coder Card */}
          <a href="https://thieves-key-coder.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
            <div className="bg-gradient-to-br from-red-800 to-pink-900 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 h-full flex flex-col">
              <div className="bg-gradient-to-br from-gray-600 to-black rounded-lg h-32 mb-4 flex items-center justify-center">
                <span className="text-white text-4xl">🔐</span>
              </div>
              <h4 className="text-lg font-semibold text-blue-100 mb-2">Thieves' Key Coder</h4>
              <p className="text-blue-200 text-sm flex-grow">A tool for encoding and decoding messages using the Thieves' Cant from D&D.</p>
            </div>
          </a>

             {/* Spell Sorter*/}
          <a href="https://thieves-key-coder.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
            <div className="bg-gradient-to-br from-red-800 to-pink-900 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 h-full flex flex-col">
              <div className="bg-gradient-to-br from-gray-600 to-black rounded-lg h-32 mb-4 flex items-center justify-center">
                <span className="text-white text-4xl">🔐</span>
              </div>
              <h4 className="text-lg font-semibold text-blue-100 mb-2">Thieves' Key Coder</h4>
              <p className="text-blue-200 text-sm flex-grow">A tool for encoding and decoding messages using the Thieves' Cant from D&D.</p>
            </div>
          </a>

          {/* Placeholder for future projects */}
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl shadow-lg p-6 opacity-50 h-full flex flex-col">
            <div className="bg-gradient-to-br from-slate-500 to-slate-600 rounded-lg h-32 mb-4 flex items-center justify-center">
              <span className="text-white text-4xl">🚧</span>
            </div>
            <h4 className="text-lg font-semibold text-blue-100 mb-2">Coming Soon</h4>
            <p className="text-blue-200 text-sm flex-grow">More projects on the way...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hub;