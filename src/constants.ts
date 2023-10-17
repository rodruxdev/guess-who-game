export enum Elements {
  AIR = "AIR",
  WATER = "WATER",
  EARTH = "EARTH",
  FIRE = "FIRE",
}

export const ELEMENT_X_COLORS = {
  [Elements.AIR]: "bg-yellow text-slate-950",
  [Elements.FIRE]: "bg-red text-white",
  [Elements.WATER]: "bg-dark-blue text-white",
  [Elements.EARTH]: "bg-green text-white",
};
