import React from "react";
import FormSearch from "./components/FornSearch";
import ArtistCard from "./components/ArtistCard";
import LyricSong from "./components/LyricSong";
function App() {
  return (
    <div className="App bg-blue-900 h-full w-full">
      <h1 className="text-gray-200 font-bold text-5xl text-center md:pt-10">
        Song Lyrics Search
      </h1>


      <FormSearch/>

      <div className="w-10/12 grid sm:grid-cols-1 md:grid-cols-2 gap-10 mx-auto mt-10">
       <ArtistCard/>
       <LyricSong/>
      </div>
    </div>
  );
}

export default App;
