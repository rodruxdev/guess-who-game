const Card = ({src, name, id}: CardProps): JSX.Element => {
  return (
    <div className='w-full flex flex-col justify-center items-center border-4 border-sky-200 p-1 rounded-md bg-lime-800 bg-opacity-50'>
      <div className='w-full aspect-[3/4] rounded overflow-hidden'>
        <img src={src} alt={name} className='w-full h-full object-cover'/>
      </div>
      <p className='m-2 text-gray-800 text-center text-s'>{name}</p>
    </div>
  )
}

export default Card