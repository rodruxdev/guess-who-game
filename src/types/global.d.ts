import { Elements } from "../constants";

export {};

declare global {
  type CardProps = {
    src: string;
    name: string;
    element: Elements;
  };

  type PropsOnlyChildren = {
    children: React.ReactNode;
  };

  type characterInfo = {
    photoUrl: string;
    name: string;
    element: Elements;
    id: string;
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
