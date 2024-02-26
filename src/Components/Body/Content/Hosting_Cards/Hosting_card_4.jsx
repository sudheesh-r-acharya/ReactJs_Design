import React from 'react'
import { BiArrowToBottom } from 'react-icons/bi'
import { FaStar } from 'react-icons/fa'
import { IoInformationCircleOutline } from 'react-icons/io5'
import { FaCheckCircle } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";



const Hosting_card_4 = () => {
  return (
    <div>
        <div className="hosting_card_4">
            <div className="hosting_c4_content">
        <div className="img-area-c4">
            <img src='Images\Hosting image.png' alt="" />
            <div className="img-heading-c4">
             <h4>CDK</h4>
            </div>
        </div>
          
          <div className="details-c4">
            <p id='Con-para-1-c4' ><span>CDK Resposive Builder</span>: An extensive library of widgets and apps, and detailed step-by-step guides</p>
            <span className="offer">
                <h5>26% Off</h5>
            </span>
            <h3>Main highlights</h3>
            <div className="middle-rating-c4">
                <h5><span className="rating">9.9</span>Building responsive</h5>
                <h5><span className="rating">8.9</span>Cool</h5>
                <h5><span className="rating">8.9</span>Docs</h5>
            </div>
            <div className="check-box-c4">
                <h3>Why we love it</h3>
                <span className='cb'>
                <FaCheckCircle className='FaCheckCircle' />
                <h5>Documentation</h5>
                </span>
                <span className='cb'>
                <FaCheckCircle className='FaCheckCircle' />
                <h5>Easy Use</h5>
                </span>
                <span className='cb'>
                <FaCheckCircle className='FaCheckCircle'/>
                <h5>Out of box</h5>
                </span>
            </div>
            <div className="showmore-c4">
            <h6>Show more</h6>
            <BiArrowToBottom/>
            </div>
          </div>
          <div className="review-c4">
            <div className="review-box-c4">
                <IoInformationCircleOutline id='info-c4'/>
                <h4>9.1</h4>
                <h3>Very Good</h3>
                <h4></h4>
                <h3></h3>
                <div className="star-c4">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaRegStar />
                </div>
            </div>
                <button><h3>View</h3></button>
          </div>

            </div>
        </div>
    </div>
  )
}

export default Hosting_card_4