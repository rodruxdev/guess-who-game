import React from 'react'

type CardProps = {
  src: string;
  name: string;
  id: string;
}

const Card = ({src, name, id}: CardProps): JSX.Element => {
  return (
    <div className='w-56 m-3'>
      <div className='w-full aspect-square'>
        <img src={src} alt={name} className='w-full h-full object-cover'/>
      </div>
      <p className='text-white'>{name}</p>
      <p className='text-white'>{id}</p>
    </div>
  )
}

export default Card