import { useEffect, useState } from "react";
import Card from "../components/Card";
import GameBoard from "../containers/GameBoard";
import { fetchCharacters } from "../services/getCharacters";
import Button from "../components/Button";
import CardSelected from "../components/CardSelected";
import {
  CHARACTER_IDS,
  ELEMENTS_ARRAY,
  ENDPOINT,
  Elements,
  GAME_STATES,
} from "../constants";
import EmptyCardSelected from "../components/EmptyCardSelected";

const Game = (): JSX.Element => {
  const [characters, setCharacters] = useState<Array<characterInfo>>([]);
  const [selectedCharacter, setSelectedCharacter] =
    useState<characterInfo | null>(null);
  const [gameState, setGameState] = useState<GAME_STATES>(
    GAME_STATES.SELECT_CHARACTER
  );

  const flipDownCharacter = (id: characterInfo["id"]) => {
    const newCharacters = [...characters];
    const characterIndex = newCharacters.findIndex(
      (character) => character.id === id
    );
    const character = newCharacters[characterIndex];
    newCharacters[characterIndex] = { ...character, isDown: !character.isDown };
    setCharacters(newCharacters);
  };

  const selectCharacter = (id: characterInfo["id"]) => {
    const characterIndex = characters.findIndex(
      (character) => character.id === id
    );
    const newSelectedCharacter = characters[characterIndex];
    setSelectedCharacter(newSelectedCharacter);
  };

  const resetCharacters = () => {
    const newCharacters = characters.map((character) => ({
      ...character,
      isDown: false,
    }));
    setCharacters(newCharacters);
  };

  const resetBoard: React.MouseEventHandler<HTMLButtonElement> = () => {
    resetCharacters();
  };

  const restartGame = () => {
    setGameState(GAME_STATES.SELECT_CHARACTER);
    setSelectedCharacter(null);
    resetCharacters();
  };

  const isSelectingCharacter = gameState === GAME_STATES.SELECT_CHARACTER;

  const changeGameState: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (isSelectingCharacter && selectedCharacter !== null) {
      setGameState(GAME_STATES.PLAYING);
    } else if (gameState === GAME_STATES.PLAYING) {
      restartGame();
    }
  };

  useEffect(() => {
    const fetchAvatarCharacters = async () => {
      const charactersRaw = await fetchCharacters<Character>(
        ENDPOINT,
        CHARACTER_IDS
      );
      let finalCharacters: characterInfo[] = [];
      // console.log(charactersRaw);
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
              isDown: false,
              id: _id,
            };
          }
        );
      }
      setCharacters(finalCharacters);
    };

    fetchAvatarCharacters();
  }, []);

  return (
    <div className="w-11/12 max-w-6xl grid m-auto place-items-center min-h-screen py-6">
      <GameBoard
        title={
          isSelectingCharacter
            ? "SELECCIONA TU PERSONAJE:"
            : "ADIVINA QUIÉN? - AVATAR EL ÚLTIMO MAESTRO DEL AIRE"
        }
      >
        {characters.map((character) => (
          <div
            className="w-fit h-fit p-1 bg-soft-blue rounded-lg"
            key={character?.name}
          >
            <Card
              src={character?.photoUrl}
              name={character?.name}
              element={character?.element}
              characterId={character?.id}
              isDown={character?.isDown}
              onClickCard={
                isSelectingCharacter ? selectCharacter : flipDownCharacter
              }
            />
          </div>
        ))}
      </GameBoard>
      <div className="w-full m-auto flex flex-col sm:flex-row justify-center items-center gap-10 lg:gap-28">
        <div className="flex flex-col justify-center items-center">
          <p className="text-slate-950 text-lg text-center">Tu eres:</p>
          {selectedCharacter ? (
            <CardSelected
              src={selectedCharacter?.photoUrl}
              name={selectedCharacter?.name}
              element={selectedCharacter?.element}
            />
          ) : (
            <EmptyCardSelected />
          )}
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <Button
            onClick={changeGameState}
            color="bg-brown text-slate-950"
            disabled={selectedCharacter === null}
          >
            {isSelectingCharacter
              ? "Inicia el juego"
              : "Selecciona tu personaje"}
          </Button>
          <Button onClick={resetBoard} color="bg-red text-white">
            Reinicia el tablero
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Game;
