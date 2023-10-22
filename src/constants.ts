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

export const ELEMENTS_ARRAY = [
  Elements.AIR,
  Elements.WATER,
  Elements.EARTH,
  Elements.FIRE,
];

export enum GAME_STATES {
  SELECT_CHARACTER = "SELECT_CHARACTER",
  PLAYING = "PLAYING",
}

export const ENDPOINT: string =
  "https://last-airbender-api.fly.dev/api/v1/characters/";

export const CHARACTER_IDS = [
  "5cf5679a915ecad153ab68c9",
  "5cf5679a915ecad153ab6992",
  "5cf5679a915ecad153ab6a45",
  "5cf5679a915ecad153ab6ab6",
  "5cf5679a915ecad153ab6a70",
  "5cf5679a915ecad153ab6976",
  "5cf5679a915ecad153ab68da",
  "5cf5679a915ecad153ab68d3",
  "5cf5679a915ecad153ab69dd",
  "5cf5679a915ecad153ab6a54",
  "5cf5679a915ecad153ab69fe",
  "5cf5679a915ecad153ab69c7",
  "5cf5679a915ecad153ab6a7a",
  "5cf5679a915ecad153ab697f",
  "5cf5679a915ecad153ab68f2",
  "5cf5679a915ecad153ab69ac",
  "5cf5679a915ecad153ab6aac",
  "5cf5679a915ecad153ab6a25",
  "5cf5679a915ecad153ab6954",
  "5cf5679a915ecad153ab6990",
  "5cf5679a915ecad153ab6a06",
  "5cf5679a915ecad153ab6952",
  "5cf5679a915ecad153ab6a8a",
  "5cf5679a915ecad153ab6908",
];
