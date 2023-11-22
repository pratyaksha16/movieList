import React, { useState } from 'react'

const Header = ({title, handleSearch}) => {
  const [inputValue, setInputValue] = useState(title);

  return (
    <div>
      <header className='header'>
        <img className='back-icon' src="https://test.create.diagnal.com/images/Back.png" alt={''}></img>
        <input 
          className='title'
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          />
        <img onClick={() => handleSearch(inputValue)} className="search-icon" src="https://test.create.diagnal.com/images/search.png" alt={''}></img>
        </header>
    </div>
  )
}

export default Header;
