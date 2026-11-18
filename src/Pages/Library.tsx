import { Music, Heart, Clock } from "lucide-react";

const playlists = [
  { id: 1, name: "Favorite Tracks", count: "24 songs", updated: "Recently" },
  { id: 2, name: "Focus & Coding Flow", count: "18 songs", updated: "2 days ago" },
  { id: 3, name: "Afrobeats & Vibes", count: "32 songs", updated: "Last week" },
  { id: 4, name: "Late Night Chill", count: "40 songs", updated: "Yesterday" },
];

function Library() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Your Music Library</h1>
        <p className="text-gray-600 mt-1">
          Browse your saved playlists, favorite songs, and recently played tracks.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            className="p-5 border border-black/10 rounded-xl bg-white shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 bg-black/5 rounded-lg">
                <Music className="w-6 h-6 text-black" />
              </div>
              <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 transition cursor-pointer" />
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-lg">{playlist.name}</h3>
              <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                <Clock className="w-3.5 h-3.5" /> {playlist.count} • {playlist.updated}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;
