import React from 'react'

function SearchOptions(props) {
  return (
    <div>
      <input className="search-input" type="text" placeholder="Search" onChange={props.handleChangeCurrentSearch}></input>
      <button className="btn-search" type="submit" onClick={props.handleClickSearch}> 🔍 </button>
      <button className="btn" type="submit" onClick={props.handleClickRandomGif}>Random GIF</button>
      <button className="btn" type="submit" onClick={props.handleClickRandomSticker}>Random Sticker</button>
      <button className="btn" type="submit" onClick={props.handleClickTrending}>Trending</button>
    </div>
  )
}

export default SearchOptions