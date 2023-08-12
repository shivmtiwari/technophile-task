import React from 'react'
import { FiShare2 } from 'react-icons/fi'
import { AiOutlineHeart, AiFillStar } from 'react-icons/ai'
import {FaLocationDot} from 'react-icons/fa6'
import {BiSolidTime} from 'react-icons/bi'
const RestaurantHeader = () => {
  return (
    <div className='RestaurantHeader'>
      <div className="HeaderImg">
        <img src="https://www.starbucks.sa/sites/starbucks-sa/files/styles/c03_image_text_1133x476/public/2022-11/SBX%20WC%20horizontal%20Banner%201133%20x%20476%20Eng%20.jpg.webp?itok=cAlxtzK7" alt="" />
      </div>

      <div className="HeaderDetails">
        <div className="RestaurantDetails">
          <div className="RestaurantNameLogo">
            <div className="RestaurantLogo">
              <img src="https://themes.pixelstrap.com/zomo-app/assets/images/icons/brand3.png" alt="" />
            </div>
            <div className="RestaurantName">
              <h4>Statbucks</h4>
              <span>Coffee</span>
            </div>
          </div>
          <div className="RestaurantShare">
            <FiShare2 className='ShareIcon' />
            <AiOutlineHeart className='HeartIcon' />
          </div>
        </div>
        <hr />
        <div className="reviewDetails">
          <div className="left">
            <div className='review'>
              <AiFillStar className='starIcon' />
              <p>3.7 (1k+ Reviews)</p>
            </div>
            <hr />
            <p>4.0Km <span>Free Delivery</span></p>
          </div>
          <div className="right">
            <div className='location'>
              <FaLocationDot className='locationIcon'/>
              <p>1 km</p>
            </div>
            <div className='time'>
              <BiSolidTime className='timeIcon'/>
              <p>15 min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantHeader