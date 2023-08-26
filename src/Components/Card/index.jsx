import React from 'react'

const Card = ({data}) => {
  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
        <figure className='relative mb-2 w-full h-4/5'>
            <img className='w-full h-full object-cover rounded-lg' src={data.image} alt="headphones" />
            <span className='absolute m-2 px-3 py-0.5 bottom-0 left-0 bg-slate-500/60 rounded-md text-black text-sm'>
                {data.category}
            </span>
            <div className='absolute m-2 p-1 top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full'>
                +</div>
            <p className='flex justify-between gap-3'>
                <span className='text-sm truncate font-light'>{data.title}</span>
                <span className='text-md  font-medium'>${data.price}</span>
            </p>
        </figure>
    </div>
  )
}

export default Card