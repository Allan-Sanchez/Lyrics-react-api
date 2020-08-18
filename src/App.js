import React,{useState,useEffect} from "react";
import FormSearch from "./components/FornSearch";
import ArtistCard from "./components/ArtistCard";
import LyricSong from "./components/LyricSong";

import axios from "axios";
function App() {

  
  const [searchAPI, setSearchAPI] = useState({});
  const [lyrics,setLyrics] = useState('');
  const [information,setInformation] = useState({});

  useEffect(() => {
    if (Object.keys(searchAPI).length === 0) return ;


    const getLyricAPI = async () =>{
      const {artist,lyrics} = searchAPI;
      const URL = `https://api.lyrics.ovh/v1/${artist}/${lyrics}`;
      const URL2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const[lyricsAPI,informationAPI] = await Promise.all([
        axios(URL),
        axios(URL2)
      ]);

      setLyrics(lyricsAPI.data.lyrics);
      setInformation(informationAPI.data.artists[0]);
      console.log(informationAPI.data.artists[0]);
    } 

    getLyricAPI();
  }, [searchAPI])
  return (
    <div className="App bg-blue-900 w-full">
      <h1 className="text-gray-200 font-bold text-5xl text-center md:pt-10">
        Song Lyrics Search
      </h1>


      <FormSearch setSearchAPI={setSearchAPI}/>

      <div className="w-10/12 grid sm:grid-cols-1 md:grid-cols-2 gap-10 mx-auto mt-10">
       <ArtistCard information={information}/>
       <LyricSong lyrics={lyrics}/>
      </div>
    </div>
  );
}

export default App;
