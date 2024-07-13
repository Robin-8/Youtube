
import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const List = ["All","Live","Cricket","Scoccer","Movies","News","Finance","All","Live","Cricket","Scoccer","Movies","News","Finance","All","Live","Cricket","Scoccer","Movies","News","Finance"]
  return (
    <div className='flex  '>
      {List.map((items,index)=>(<Button name={items} key={index}/>))}
    </div>
  )
}

export default ButtonList