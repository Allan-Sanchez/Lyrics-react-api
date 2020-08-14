import React, { Fragment, useState } from "react";
import Sing from "../assets/img/sing.svg";
import Lyrics from "../assets/img/lyrics.svg";
import Error from "./Error";

const FormSearch = () => {
  const [search, setSearch] = useState({
    artist: "",
    lyrics: "",
  });

  const [alertError, setAlertError] = useState(true);

  const { artist, lyrics } = search;
  const handleSearch = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const searchInformation = (e) => {
    e.preventDefault();

    if (artist.trim() === "" && lyrics.trim() === "") {
      return;
    }
  };

  return (
    <Fragment>
      {alertError ? <Error/>: null}
      <form className="w-10/12 ml-12 mt-10" onSubmit={searchInformation}>
        <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4 ">
          <div className="col-span-1"></div>
          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <input
              type="text"
              required
              autoFocus
              placeholder="Write the singer's name"
              name="artist"
              value={artist}
              onChange={handleSearch}
              className="px-3 py-3 placeholder-gray-600 text-gray-800 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline  w-full pr-10"
            />
            <span className="z-10 h-full leading-snug font-normal  text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
              {/* <i className="fas fa-user"></i> text */}
              <img src={Sing} alt="Sing" />
            </span>
          </div>

          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <input
              type="text"
              required
              placeholder="Write the song name"
              name="lyrics"
              value={lyrics}
              onChange={handleSearch}
              className="px-3 py-3 placeholder-gray-600 text-gray-800 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline  w-full pr-10"
            />
            <span className="z-10 h-full leading-snug font-normal  text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
              <img src={Lyrics} alt="Sing" />
            </span>
          </div>
          <div>
            <button
              className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="submit"
              style={{ transition: "all .15s ease" }}
            >
              Regular
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default FormSearch;
