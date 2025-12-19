import Layout from './components/Layout';

function Home() {
  return (
    <Layout>
      <main className="flex-1 flex flex-col items-center py-6 px-1 sm:px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-100 drop-shadow-lg mb-2 animate-bounce tracking-wide">
          Viv's Homebrew
        </h1>
        <h2 className="text-base sm:text-lg text-white-900 bg-white/10 rounded-xl px-3 sm:px-6 py-2 sm:py-3 shadow-md mb-6 max-w-2xl text-center">
          Welcome to my Homesite. This will be a collection of all of my web content and personal projects.
        </h2>

        <div className="w-full max-w-xl bg-black rounded-2xl shadow-lg p-4 sm:p-6 mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-blue-100 mb-2">Newest Content:</h3>
          <ul className="list-disc list-inside text-blue-100">
            <li>New Damage Type: Sickness </li>
            <li> Updated: WorldWeaver </li>
          </ul>
        </div>

        <div className="w-full max-w-xl bg-black rounded-2xl shadow-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-blue-100 mb-2">Uncategorized Content</h2>
          <ul className="list-disc list-inside text-blue-100">
            <li>
              <a className="text-blue-100 underline hover:text-blue-300 transition" href="https://homebrewery.naturalcrit.com/share/-z5fBGxy77SQ" target="_blank" rel="noopener noreferrer">
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