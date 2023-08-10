type PropsOnlyChildren = {
  children: React.ReactNode
}

const CardContainer = ({ children }: PropsOnlyChildren): JSX.Element => {
  return (
    <div className="w-full grid grid-cols-8 gap-2 place-content-center">{children}</div>
  )
}

export default CardContainer