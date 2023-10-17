import { ELEMENT_X_COLORS } from "../constants";

const Card = ({ src, name, element }: CardProps): JSX.Element => {
  return (
    <div
      className={`w-24 h-44 flex flex-col justify-center items-center gap-2 px-1 rounded ${ELEMENT_X_COLORS[element]}`}
    >
      <div className="w-11/12 aspect-[3/4] rounded overflow-hidden">
        <img src={src} alt={name} className="w-full h-full object-cover" />
      </div>
      <p className="text-center text-s">{name}</p>
    </div>
  );
};

export default Card;
