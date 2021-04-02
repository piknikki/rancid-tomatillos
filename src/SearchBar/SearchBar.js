import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <form>
        <label>
          <input type="text" placeholder="Search for a movie......."/>
        </label>
        <input className="searchBtn" type="submit" value="Search"/>
      </form>
    </div>
  )
}

export default SearchBar
