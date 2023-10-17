import React from "react";
import { ELEMENT_X_COLORS } from "../constants";

const CardSelected = ({ src, name, element }: CardProps): JSX.Element => {
  return (
    <div
      className={`w-40 h-48 flex flex-col justify-center items-center gap-2 px-4 rounded-lg ${ELEMENT_X_COLORS[element]}`}
    >
      <div className="w-4/5 aspect-[3/4] rounded overflow-hidden">
        <img src={src} alt={name} className="w-full h-full object-cover" />
      </div>
      <p className="text-center text-s">{name}</p>
    </div>
  );
};

export default CardSelected;
