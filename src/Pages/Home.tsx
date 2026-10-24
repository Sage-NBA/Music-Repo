function Home() {
  return (
    <div className="p-5 w-fit h-fit border border-black bg-black/50 rounded px-10">
      <h1 className="text-5xl">
        Welcome!!
        <br /> <span>Sign In</span>
      </h1>
      <div className="py-10">
        <h1>
          Listen to Your
          <br />
          Favourtie Songs
        </h1>
        <p className="py-10">
          <button className="w-fit h-fit py-1 px-2 bg-black/50 rounded">
            Learn More
          </button>
        </p>
        <audio controls src="/music/song.mp3" />
      </div>
    </div>
  );
}

export default Home;
