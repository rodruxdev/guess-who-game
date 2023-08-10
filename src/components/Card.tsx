import React from 'react'

type CardProps = {
  src: string;
  name: string;
  id: string;
}

const Card = ({src, name, id}: CardProps): JSX.Element => {
  return (
    <div className='w-full'>
      <div className='w-full aspect-square'>
        <img src={src} alt={name} className='w-full h-full object-cover'/>
      </div>
      <p className='text-white'>{name}</p>
    </div>
  )
}

export default Card