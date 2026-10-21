import { Search, User, Settings, Bell } from "lucide-react";
import { useState } from "react";

type Song = {
  trackId: number;
  trackName: string;
  artistName: string;
  artworkUrl100: string;
  previewUrl?: string;
};

function NavBar() {
  const [search, setSearch] = useState("");
  const [songs, setSongs] = useState<Song[]>([]);

  const searchMusic = async () => {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(search)}&entity=song&limit=10`,
    );
    const data = await response.json();

    setSongs(data.results);
    ``;
  };
  return (
    <div>
      <nav className="flex items-center bg-gray-300 justify-between px-5 ">
        <p className="w-15 h-15 p-px rounded-[20px] md:border border-black border-2">
          <img
            className="w-full h-full object-cover rounded-[20px] "
            src="./Sam.jpeg"
          />
        </p>

        {/* input */}
        <div className="flex items-center gap-2">
          <button onClick={searchMusic}>
            <Search />
          </button>
          {songs.map((song) => (
            <div key={song.trackId}>
              <img src={song.artworkUrl100} alt={song.trackName} />
              <h2>{song.trackName}</h2>
              <p>{song.artistName}</p>
              {song.previewUrl && <audio controls src={song.previewUrl} />}
            </div>
          ))}
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-b border-black "
            placeholder="Search Songs 🎶"
          />
        </div>
        {/* user */}
        <div className="flex items-center gap-5 ">
          <p className="w-fit h-fit bg-gray-500 p-px border-black border-2 rounded-[100px]">
            <User />
          </p>
          <p>Sign Up</p>
          <Settings />
          <Bell />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
