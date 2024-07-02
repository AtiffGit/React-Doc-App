import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
  
        <motion.div drag dragConstraints={reference} className=' cursor-pointer relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm font-semibold mt-5 leading-tight'>{data.desc}</p>
        <div className='footer absolute  left-0 bottom-0 w-full  '>
            <div className='flex items-center py-3 px-8 mb-3 justify-between'>
                <h5>{data.filesize}</h5>
                <span className=' cursor-pointer h-7 w-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.Close  ?  <IoMdCloseCircle /> : <LuDownload size=".7em" color="#fff" />}
                
                </span>
            </div>
            {
                data.tag.isOpen && (
                    <div className={`tag flex item-center justify-center w-full py-4 ${data.tag.tagColor === "blue" ?
                        "bg-blue-600" : "bg-green-600" }`}>
                <h3 className='text-md font-semibold'>
                    {data.tag.tagtitle}
                </h3>
                </div>
                ) 
            }
            
        </div>
        </motion.div>
  
  )
}

export default Card