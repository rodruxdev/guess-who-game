const CardContainer = ({ children }: PropsOnlyChildren): JSX.Element => {
  return (
    <div className="w-full grid grid-cols-8 gap-4 place-content-center">{children}</div>
  )
}

export default CardContainer