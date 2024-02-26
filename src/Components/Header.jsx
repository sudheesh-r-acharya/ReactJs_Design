import React from 'react'
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div>
        <div className="navbar">
            <div className="searchBar">
                <div className="Search-box">
                <FiSearch className='icon' />
                <input  type="search" name="" id="" />
                </div>

            </div>
            <div className="Nav-elements">
                <a href="#">Categories</a>
                <a href="#">Website Builders</a>
                <a href="#">Today's deals</a>
               
            </div>
        </div>
    </div>
  )
}

export default Header