import { ELEMENT_X_COLORS } from "../constants";

const Card = ({ src, name, element }: CardProps): JSX.Element => {
  return (
    <button className="w-24 h-44 relative card">
      <div
        className={`w-full h-full flex flex-col justify-center items-center gap-2 px-1 rounded ${ELEMENT_X_COLORS[element]} card__front`}
      >
        <div className="w-11/12 aspect-[3/4] rounded overflow-hidden card__content">
          <img src={src} alt={name} className="w-full h-full object-cover" />
        </div>
        <p className="text-center text-s card__content">{name}</p>
      </div>
      <div className="w-full h-full grid place-items-center bg-brown px-1 rounded card__back">
        <div className="w-4/5 card__content">
          <img src="/logo-avatar.svg" alt="" />
        </div>
      </div>
    </button>
  );
};

export default Card;
