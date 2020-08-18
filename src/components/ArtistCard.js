import React from "react";
import Tag from "../assets/img/tag.svg";

const ArtistCard = ({information}) => {
  if(Object.keys(information).length === 0) return null;
  return (
    <div>
      <div className="bg-pink-500 py-2 rounded">
        <h1 className="text-center text-white text-3xl">Artist's Information</h1>
      </div>
      <div className="relative">
        <img
          src={information.strArtistThumb}
          alt="programming"
        />
      <div className="w-1/3 absolute bottom-0 left-0">
        <div className="rounded bg-pink-500 py-2 flex justify-center items-center">
          <p className="w-2/3 text-center text-xl text-white">{information.strCountry}</p>
          <span className="w-1/3 mx-auto">
            <img className="w-1/2" src={Tag} alt="tag" />
          </span>
        </div>
      </div>
      </div>
      <div className="bg-pink-100">
        <h2 className="text-center text-3xl text-gray-700">{information.strArtist}</h2>
        <div className="bg-pink-500 w-11/12 mx-auto  h-2"></div>
        <div className="p-8">
          <p>{information.strBiographyES}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
