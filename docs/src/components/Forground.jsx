import React,  {useRef, useState} from 'react';
import Card from './Card';

function Forground() {
    const ref = useRef(null);
    const data = [
        {
            desc: "Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit",
            filesize : ".9mb",
            Close: false,
            tag: {isOpen: true, tagtitle :"Download Now", tagColor: "green"},

        },
        {
            desc: "Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit",
            filesize : ".9mb",
            Close: false,
            tag: {isOpen: true, tagtitle :"Download Now", tagColor: "blue"},

        },
         {
            desc: "Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit",
            filesize : ".9mb",
            Close: false,
            tag: {isOpen: false, tagtitle :"Download Now", tagColor: "green"},

        },
        {
            desc: "Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit",
            filesize : ".9mb",
            Close: false,
            tag: {isOpen: true, tagtitle :"Download Now", tagColor: "green"},

        },
        {
            desc: "Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit",
            filesize : ".9mb",
            Close: false,
            tag: {isOpen: true, tagtitle :"Download Now", tagColor: "blue"},

        },
         {
            desc: "Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit",
            filesize : ".9mb",
            Close: false,
            tag: {isOpen: false, tagtitle :"Download Now", tagColor: "green"},

        },
        {
            desc: "Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit",
            filesize : ".9mb",
            Close: false,
            tag: {isOpen: true, tagtitle :"Download Now", tagColor: "green"},

        },
        {
            desc: "Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit",
            filesize : ".9mb",
            Close: false,
            tag: {isOpen: true, tagtitle :"Download Now", tagColor: "blue"},

        },
         {
            desc: "Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit",
            filesize : ".9mb",
            Close: false,
            tag: {isOpen: false, tagtitle :"Download Now", tagColor: "green"},

        },
        {
            desc: "Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit",
            filesize : ".9mb",
            Close: false,
            tag: {isOpen: true, tagtitle :"Download Now", tagColor: "green"},

        },
        {
            desc: "Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit",
            filesize : ".9mb",
            Close: false,
            tag: {isOpen: true, tagtitle :"Download Now", tagColor: "blue"},

        },
         {
            desc: "Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit",
            filesize : ".9mb",
            Close: false,
            tag: {isOpen: false, tagtitle :"Download Now", tagColor: "green"},

        },
    ];
  return (
  
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-10 p-5 '>
      {data.map((item, index) =>(
        <Card data={item }   reference={ref} />
      ))}
    </div>


  );
}

export default Forground