import { useState } from 'react';
import FeatModal from '../components/featModal';
import { modifiedFeats } from '../data/feats';
import Layout from '../components/Layout';

function Feats() {
  const [selectedFeat, setSelectedFeat] = useState(null);

  // Filter feats by type
  const modified = modifiedFeats.filter(f => f.type === "Modified");
  const homebrew = modifiedFeats.filter(f => f.type === "Homebrew");
  const racial = modifiedFeats.filter(f => f.type === "Racial");

  return (
    <Layout>
      <main className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 px-2 sm:px-4">

        {/* Modified 5e Feats */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h2 className="text-xl font-bold text-blue-900 mb-4 text-center">
            Modified 5e Feats
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-blue-900 font-medium">
            {modified.map(feat => (
              <li
                key={feat.id}
                className="before:content-['★'] hover:underline cursor-pointer"
                onClick={() => setSelectedFeat(feat)}
              >
                {feat.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Homebrew Feats */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h2 className="text-xl font-bold text-blue-900 mb-4 text-center">
            Homebrew Feats
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-blue-900 font-medium">
            {homebrew.map(feat => (
              <li
                key={feat.id}
                className="before:content-['★'] hover:underline cursor-pointer"
                onClick={() => setSelectedFeat(feat)}
              >
                {feat.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Racial Feats  */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h2 className="text-xl font-bold text-blue-900 mb-4 text-center">
            Race Specific Feats
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-blue-900 font-medium">
            {racial.map(feat => (
              <li
                key={feat.id}
                className="before:content-['★'] hover:underline cursor-pointer"
                onClick={() => setSelectedFeat(feat)}
              >
                {feat.name}
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* Modal */}
      <FeatModal
        isOpen={!!selectedFeat}
        onClose={() => setSelectedFeat(null)}
        title={selectedFeat?.name}
        content={selectedFeat?.description}
      />
    </Layout>
  );
}

export default Feats;
