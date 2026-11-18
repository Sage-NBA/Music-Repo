import { Play, Sparkles } from "lucide-react";

function Home() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="p-8 border border-black/10 bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl shadow-lg">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-gray-300 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-yellow-400" /> Discover New Beats
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Listen to Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Favorite Tracks
          </span>
        </h1>
        <p className="mt-3 text-gray-300 max-w-lg text-sm sm:text-base">
          Stream high-fidelity music, search through millions of songs, and organize your favorite playlists seamlessly.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 font-medium text-sm rounded-lg transition shadow-md">
            <Play className="w-4 h-4 fill-white" /> Start Listening
          </button>
          <button className="px-5 py-2.5 bg-white/10 hover:bg-white/20 font-medium text-sm rounded-lg transition">
            Explore Playlists
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
