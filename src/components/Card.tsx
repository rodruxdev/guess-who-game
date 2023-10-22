import { MouseEventHandler } from "react";
import { ELEMENT_X_COLORS } from "../constants";
import logo from "/logo-avatar.svg";

const Card = ({
  src,
  name,
  element,
  characterId,
  isDown,
  onClickCard,
}: CardProps): JSX.Element => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (onClickCard !== undefined && characterId !== undefined) {
      onClickCard(characterId);
    }
  };
  return (
    <button className="w-24 h-44 relative card" onClick={handleClick}>
      <div
        className={`w-full h-full flex flex-col justify-center items-center gap-2 px-1 rounded ${
          ELEMENT_X_COLORS[element]
        } card__front${isDown ? " card__front--down" : ""}`}
      >
        <div className="w-11/12 aspect-[3/4] rounded overflow-hidden card__content">
          <img src={src} alt={name} className="w-full h-full object-cover" />
        </div>
        <p className="text-center text-s card__content">{name}</p>
      </div>
      <div
        className={`w-full h-full grid place-items-center bg-brown px-1 rounded card__back${
          isDown ? " card__back--down" : ""
        }`}
      >
        <div className="w-4/5 card__content">
          <img src={logo} alt="" />
        </div>
      </div>
    </button>
  );
};

export default Card;
