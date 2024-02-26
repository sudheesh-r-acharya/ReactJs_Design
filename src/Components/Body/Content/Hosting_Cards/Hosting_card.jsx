import React from 'react'
import { BiArrowToBottom } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import Data from '../../../Data';

const Hosting_card = () => {
  return (
    <div>
            {
                
                Data.map((item)=>{
                    
                    return(
                        
          <div className="Host-content" key={item.id}>
          <div className="img-area"><img src={item.img} alt="" /></div>
          <div className="img-heading">
          <h4>{item.img_header}</h4>
          </div>
          <div className="details">
            <p id='Con-para-1' ><span>{item.para1_header}</span>{item.para1}</p>
            <h3>{item.para2_header}</h3>
            <p id='Con-para-2'>{item.para2}</p>
            <div className="showmore">
            <h6>Show more</h6>
            <BiArrowToBottom />
            </div>
          </div>
          <div className="review">
            <div className="review-box">
                <IoInformationCircleOutline id='info'/>
                <h4>{item.review}</h4>
                <h3>{item.review_key}</h3>
                <div className="star">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                </div>
            </div>
                <button><h3>View</h3></button>
          </div>
        </div>
             )
            })

            }
    </div>
  )
}

export default Hosting_card