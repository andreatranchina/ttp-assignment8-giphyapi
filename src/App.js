import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [giphyList, setGiphyList] = useState([]);


  useEffect(() => {
    async function fetchGiphys(){
      try{
        const list = await axios.get("https://api.giphy.com/v1/gifs/trending?api_key=QUKQWldQ4ev84lpETKvbdYU6MVUaNx7f");
        let fetchGiphys = [...list.data.data];
        setGiphyList(fetchGiphys);
        console.log(fetchGiphys);
      }
      catch(error){
        console.log(error);
      }
    }
    fetchGiphys();
  }, []);
  return (
    <div className="App">
      {giphyList.map((giphy)=>{
        return (<img src={giphy.images.fixed_height.url} />)
      })}
    </div>
  );
}

export default App;
