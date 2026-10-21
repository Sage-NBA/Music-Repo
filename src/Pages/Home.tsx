import { useState } from "react";

type Song = {
  trackId: number;
  trackName: string;
  artistName: string;
  artworkUrl100: string;
  previewUrl?: string;
};

function Home() {
  const [search, setSearch] = useState("");
  const [songs, setSongs] = useState<Song[]>([]);

  const searchMusic = async () => {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(search)}&entity=song&limit=10`,
    );

    const data = await response.json();

    setSongs(data.results);
  };
  return (
    <div className="p-5">
      <h1 className="text-5xl">
        Welcome!!
        <br /> <span>Sign In</span>
      </h1>
      <div>
        <h1>
          Listen to Your
          <br />
          Favourtie Songs
        </h1>
        <audio controls src="/music/song.mp3" />
      </div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search songs..."
      />

      <button onClick={searchMusic}>Search</button>
      {songs.map((song) => (
        <div key={song.trackId}>
          <img src={song.artworkUrl100} alt={song.trackName} />
          <h2>{song.trackName}</h2>
          <p>{song.artistName}</p>
          {song.previewUrl && <audio controls src={song.previewUrl} />}
        </div>
      ))}
    </div>
  );
}

export default Home;
