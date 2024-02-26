import React from 'react'
import { CiCircleCheck } from "react-icons/ci";
import { IoInformationCircleOutline } from "react-icons/io5";
import { BiArrowToBottom } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";
import Hostings from './Hostings';
import Deals from './Deals/Deals';



const Content = () => {
  return (
    <div className='Content'>
      <div className="Content-H">
        <h1>Best Website builders in the US</h1>
        <span className="line"></span>

        <div className="Content-bt">
         
        <div className="Content-bt-1">
        <CiCircleCheck/>
        <h4>Last Updated - February 22, 2020</h4>
        <IoInformationCircleOutline id='info'/>
        <h4>Advertising Disclosure</h4>
        </div>
        <div className="Content-bt-2">
        <h4>Top Relevant</h4>
        <BiArrowToBottom />

        </div>
        </div>
        <span className="line"></span>
      </div>
      <div className="btn-bar-1">
        <h5>Tools</h5>
        <h5>AWS Builder</h5>
        <h5>Start Build</h5>
        <h5>Build Supplies</h5>
        <h5>Tooling</h5>
        <h5>BlueHosting</h5>
      </div>
      <div className="btn-bar-2">
        <h6>Home</h6>
        <RiArrowRightSLine />
        <h6>Hosting for all</h6>
        <RiArrowRightSLine />
        <h6>Hosting</h6>
        <RiArrowRightSLine />
        <h6>Hosting6</h6>
        <RiArrowRightSLine />
        <h6>Hosting5</h6>
        
      </div>

      <Hostings/>
      <Deals/>

    </div>
  )
}

export default Content