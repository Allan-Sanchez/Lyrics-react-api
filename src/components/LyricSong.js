import React from 'react'

const LyricSong = ({lyrics}) => {
    
    if(lyrics.length === 0) return null;
    return ( 
        <div className="bg-pink-100">
            <h1 className="text-3xl text-gray-900 pt-2 text-center">Lyric Song</h1>
            <div className="w-full h-2 bg-pink-500"></div>
            <div className="p-10 whitespace-pre-wrap text-center">
                {lyrics}
            </div>
        </div>
     );
}
 
export default LyricSong;