import React from 'react'

function FilterOptions(props) {

  return (
    <div>
      <input className="radio" type="radio" value="gifs" id="radio-gif" name="filter-type" onClick={props.handleClickRadio}></input>
      <label for="radio-gif">GIFs</label>
      <input className="radio" type="radio" value="stickers" id="radio-sticker" name="filter-type" onClick={props.handleClickRadio}></input>
      <label for="radio-gif">Stickers</label>
      <input className="radio" type="radio" value="all" id="radio-all" name="filter-type" onClick={props.handleClickRadio}></input>
      <label for="radio-gif">All</label>
    </div>
  )
}

export default FilterOptions