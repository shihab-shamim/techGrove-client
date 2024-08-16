import React from 'react';
import { BiSolidCategory } from 'react-icons/bi';
import { BsSmartwatch, BsSpeakerFill } from 'react-icons/bs';
import { FaHeadphonesSimple } from 'react-icons/fa6';
import { FcCamera, FcRating, FcTwoSmartphones } from "react-icons/fc";
import { GiLaptop } from 'react-icons/gi';
import { LiaMoneyBillWaveSolid } from 'react-icons/lia';

const Card = ({product}) => {
  const {Category,Description,Price,ProductCreationDateTime,ProductImage,ProductName,Ratings  } =product
    return (
        <div className="w-full  overflow-hidden bg-white rounded-lg  dark:bg-gray-800">
        <img className=" w-full h-full" src={ProductImage} alt="avatar" />
    
        <div className="flex items-center px-6 py-3 bg-gray-900">
        {Category==='Phone' && <FcTwoSmartphones size={30} />}{Category==='Laptop' && <GiLaptop color='orange'size={30} />}
        {Category==='camera' &&  <FcCamera size={30} />} {Category==='Smartwatch' && <BsSmartwatch size={30} color='orange'/>}
        {Category==='HeadPhone' && <FaHeadphonesSimple size={30} color='orange'/>}
        {Category==='Speaker' && <BsSpeakerFill size={30} color='orange'/>}
    
            <h1 className="mx-3 text-lg font-semibold text-white">{ProductName}</h1>
        </div>
    
        <div className="px-6 py-4">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white flex"><BiSolidCategory size={30} color='red'/>{Category}</h1>
    
            <p className="py-2 text-gray-700 dark:text-gray-400">{Description}</p>
    
            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <LiaMoneyBillWaveSolid size={25} />
    
                <h1 className="px-2 text-sm font-bold text-orange-800">{Price} <span className='text-xl font-extrabold'>৳</span> </h1>
            </div>
    
            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <FcRating size={25} />
    
                <h1 className="px-2 text-sm text-[#F44336]">{Ratings}</h1>
            </div>
    
            
        </div>
    </div>
    
    );
};

export default Card;