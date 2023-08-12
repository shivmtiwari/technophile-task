import React, { useState } from 'react'
import Cardsdata from '../CardsData'
import ItemCard from './ItemCard'
import SearchBar from './SearchBar';

const ItemList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const filterItems = Cardsdata.filter((item) => {
    const searchMatch =
      searchTerm.trim() === '' ||
      item.rname.toLowerCase().includes(searchTerm.toLowerCase());
    return searchMatch;
  });

  return (
    <div className='ItemList'>
      <SearchBar handleSearch={handleSearch} />
      {
        filterItems.length === 0 ?
          <div className='noItems'>
            <p>No Item Found</p>
          </div> :
          <>
            {
              filterItems.map((item) => {
                return (
                  <ItemCard item={item} key={item.id} />
                )
              })
            }
          </>
      }
    </div>
  )
}

export default ItemList