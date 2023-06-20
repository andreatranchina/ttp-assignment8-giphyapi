import React, {useState, useEffect} from 'react'
import axios from "axios";

function useFetch(urlGifs, urlStickers, randomizer) {
  const [gifData, setGifData] = useState([]);
  const [stickerData, setStickerData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(()=>{
    async function fetchData(){
      setLoading(true);
      let resGifs, resStickers, gifs, stickers;
      try {
        if (urlGifs){
          resGifs = await axios.get(urlGifs);
          Array.isArray(resGifs.data.data)?gifs = [...resGifs.data.data]: gifs = resGifs.data.data;
          setGifData(gifs);
          }
        else{
          setGifData(null);  
        }  
        if (urlStickers){
          urlStickers && (resStickers = await axios.get(urlStickers));
          Array.isArray(resStickers.data.data)? stickers = [...resStickers.data.data]: stickers = resStickers.data.data;
          setStickerData(stickers);
        } 
        else{
          setStickerData(null);  
        }
        setLoading(false);
      }
      catch(err){
        setError(err);
        setLoading(false);
      }
    }
    fetchData();
  }, [urlGifs, urlStickers, randomizer]); 

  return {gifData, stickerData, loading, error};

}

export default useFetch