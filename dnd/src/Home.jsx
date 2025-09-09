import Layout from './components/Layout';

function Home() {
  return (
    <Layout>
      <main className="flex-1 flex flex-col items-center py-6 px-1 sm:px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-100 drop-shadow-lg mb-2 animate-bounce tracking-wide">
          Viviverse Homebrew
        </h1>
        <h2 className="text-base sm:text-lg text-blue-900 bg-white/80 rounded-xl px-3 sm:px-6 py-2 sm:py-3 shadow-md mb-6 max-w-2xl text-center">
          Welcome to my Homebrew DND content. You can find my custom feats, edited feats, new classes and campaign information!<br />
          I made this website to help my players have an easier time making characters and understanding the world they will play in.
        </h2>

        <div className="w-full max-w-xl bg-white/90 rounded-2xl shadow-lg p-4 sm:p-6 mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">Newest Content:</h3>
          <ul className="list-disc list-inside text-blue-800">
            <li>New Warlock Subclass: Primordial Shadow  </li>
            <li>New Class: The LifeWeaver | A flexible 'do anything' class </li>
          </ul>
        </div>

        <div className="w-full max-w-xl bg-white/90 rounded-2xl shadow-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">Uncategorized Content</h2>
          <ul className="list-disc list-inside text-blue-800">
            <li>
              <a className="text-purple-600 underline hover:text-purple-800 transition" href="https://homebrewery.naturalcrit.com/share/-z5fBGxy77SQ" target="_blank" rel="noopener noreferrer">
                Eryndors Light Ray
              </a>
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
