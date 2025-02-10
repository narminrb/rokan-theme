import React from 'react'

const SharedCard = ({image, title, desc, onDelete}) => {
  return (
    <div className='p-4 bg-amber-50 shadow-md rounded-md'>
        <div className='w-full h-[350px] overflow-hidden'>
            <img className='w-full h-full object-cover' src={image} alt={title}/>
        </div>
        <div className='mt-4'>
            <h2 className='text-2xl font-bold'>{title}</h2>
            <p className='text-gray-500 text-sm'>{desc}</p>
            <button
            className='px-4 py-2 text-white bg-red-500 rounded-md mt-2'
            onClick={onDelete}
            >Delete</button>
            </div>
    </div>
  )
}

export default SharedCard