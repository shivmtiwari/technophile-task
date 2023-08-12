import React from 'react'
import Navbar from '../Components/Navbar'
import RestaurantHeader from '../Components/RestaurantHeader'
import ItemList from '../Components/ItemList'

const HomePage = () => {
  return (
    < div className='HomePage'>
      <RestaurantHeader />
      <Navbar />
      <ItemList/>
    </div>
  )
}

export default HomePage