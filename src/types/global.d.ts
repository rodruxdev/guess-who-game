import { Elements } from "../constants";

export {};

declare global {
  type CardProps = {
    src: string;
    name: string;
    element: Elements;
    characterId?: characterInfo["id"];
    isDown?: boolean;
    onClickCard?: (id: characterInfo["id"]) => void;
  };

  type PropsOnlyChildren = {
    children: React.ReactNode;
  };

  type characterInfo = {
    photoUrl: string;
    name: string;
    element: Elements;
    id: string;
    isDown: boolean;
  };

  interface Character {
    _id: string;
    allies: string[];
    enemies: string[];
    photoUrl: string;
    name: string;
    affiliation: string;
  }
}
