import { useEffect, useState } from "react";
import Card from "../components/Card";
import GameBoard from "../containers/GameBoard";
import { fetchCharacters } from "../services/getCharacters";
import Button from "../components/Button";
import CardSelected from "../components/CardSelected";
import { Elements } from "../constants";

const endpoint: string =
  "https://last-airbender-api.fly.dev/api/v1/characters/";
const ids = [
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

const ELEMENTS_ARRAY = [
  Elements.AIR,
  Elements.WATER,
  Elements.EARTH,
  Elements.FIRE,
];

const Game = () => {
  const [characters, setCharacters] = useState<Array<characterInfo>>([]);

  useEffect(() => {
    const fetchAvatarCharacters = async () => {
      const charactersRaw = await fetchCharacters<Character>(endpoint, ids);
      let finalCharacters: characterInfo[] = [];
      console.log(charactersRaw);
      if (charactersRaw !== undefined) {
        finalCharacters = charactersRaw.map(
          ({ _id, photoUrl, name, affiliation }) => {
            let element = null;
            if (affiliation) {
              const affiliationUpper = affiliation.toUpperCase();
              for (const elementValue of ELEMENTS_ARRAY) {
                if (affiliationUpper.includes(elementValue)) {
                  element = elementValue;
                  break;
                }
              }
            }
            if (element === null) {
              element = Elements.AIR;
            }
            return {
              photoUrl,
              name,
              element,
              id: _id,
            };
          }
        );
      }
      setCharacters(finalCharacters);
    };

    fetchAvatarCharacters();
  }, []);

  const handleSelectCharacter: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {};

  return (
    <div className="w-11/12 max-w-6xl grid m-auto place-items-center min-h-screen py-6">
      <GameBoard>
        {characters.map((character) => (
          <div
            className="w-fit h-fit p-1 bg-soft-blue rounded-lg"
            key={character?.name}
          >
            <Card
              src={character?.photoUrl}
              name={character?.name}
              element={character?.element}
            />
          </div>
        ))}
      </GameBoard>
      <div className="w-full m-auto flex justify-center items-center gap-28">
        <div className="flex flex-col justify-center items-center">
          <p className="text-slate-950 text-lg text-center">Tu eres:</p>
          <CardSelected
            src={characters[0]?.photoUrl}
            name={characters[0]?.name}
            element={characters[0]?.element}
            key={characters[0]?.name}
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <Button
            onClick={handleSelectCharacter}
            color="bg-brown text-slate-950"
          >
            Selecciona tu personaje
          </Button>
          <Button onClick={handleSelectCharacter} color="bg-red text-white">
            Reinicia el tablero
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Game;
