import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

import GifStickerCard from "./components/GifStickerCard";
import FilterOptions from "./components/FilterOptions";
import SearchOptions from "./components/SearchOptions";
import useFetch from "./useFetch";

function App() {
  const [urlGifs, setUrlGifs] = useState("https://api.giphy.com/v1/gifs/trending?api_key=QUKQWldQ4ev84lpETKvbdYU6MVUaNx7f");
  const [urlStickers, setUrlStickers] = useState(`https://api.giphy.com/v1/stickers/trending?api_key=QUKQWldQ4ev84lpETKvbdYU6MVUaNx7f`);
  const [radioFilter, setRadioFilter] = useState("all");
  const [randomizer, setRandomizer] = useState(false);
  const [currentSearch, setCurrentSearch] = useState("");

  const {gifData, stickerData, loading, error} = useFetch(urlGifs, urlStickers, randomizer);
  // const [rating, setRating] = useState("all");

  function handleClickRandomGif(event){
    event.preventDefault();
    setUrlGifs(`https://api.giphy.com/v1/gifs/random?api_key=QUKQWldQ4ev84lpETKvbdYU6MVUaNx7f`);
    setUrlStickers(null);
    setRandomizer(!randomizer);
  }

  function handleClickRandomSticker(event){
    event.preventDefault();
    setUrlStickers('https://api.giphy.com/v1/stickers/random?api_key=QUKQWldQ4ev84lpETKvbdYU6MVUaNx7f');
    setUrlGifs(null);
    setRandomizer(!randomizer);
  }

  function handleClickRadio(event){
    setRadioFilter(event.target.value);
  }

  function handleClickTrending(event){
    event.preventDefault();
    setUrlGifs("https://api.giphy.com/v1/gifs/trending?api_key=QUKQWldQ4ev84lpETKvbdYU6MVUaNx7f");
    setUrlStickers("https://api.giphy.com/v1/stickers/trending?api_key=QUKQWldQ4ev84lpETKvbdYU6MVUaNx7f");
  }

  function handleChangeCurrentSearch(event){
    setCurrentSearch(event.target.value);
  }

  function handleClickSearch(event){
    event.preventDefault();
    setUrlGifs(`https://api.giphy.com/v1/gifs/search?q=${currentSearch}&api_key=QUKQWldQ4ev84lpETKvbdYU6MVUaNx7f`);
    setUrlStickers(`https://api.giphy.com/v1/stickers/search?q=${currentSearch}&api_key=QUKQWldQ4ev84lpETKvbdYU6MVUaNx7f`)
  }

  return (
    <div className="App">
    <form className="search-filter-form">
      <SearchOptions handleClickSearch={handleClickSearch} handleClickRandomSticker={handleClickRandomSticker}
      handleClickRandomGif={handleClickRandomGif} handleClickTrending={handleClickTrending} 
      handleChangeCurrentSearch={handleChangeCurrentSearch}
      />
      <FilterOptions setRadioFilter={setRadioFilter} handleClickRadio={handleClickRadio}/>
    </form>

      {radioFilter==="stickers"?null:
      Array.isArray(gifData)?gifData.map((gif)=>{
        return (<GifStickerCard key={gif.slug} image={gif.images.fixed_height.url} />)
      }):gifData?<GifStickerCard key={gifData.slug} image={gifData.images.fixed_height.url}/>
      :null}

      {radioFilter==="gifs"?null:
      Array.isArray(stickerData)?stickerData.map((sticker)=>{
        return (<GifStickerCard key={sticker.slug} image={sticker.images.fixed_height.url} />)
      }):stickerData?<GifStickerCard key={stickerData.slugh} image={stickerData.images.fixed_height.url} />
      :null}

    </div>
  );
}

export default App;
