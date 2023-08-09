import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import CardContainer from './containers/CardContainer'
import { fetchCharactersWithPagination } from './getCharacters'

type characterInfo = {
  photoUrl: string;
  name: string;
  id: string
}

interface Character {
  _id: string;
  allies: string[];
  enemies: string[];
  photoUrl: string;
  name: string;
  affiliation: string;
}

const endpoint: string = "https://last-airbender-api.fly.dev/api/v1/characters";
const perPage: number = 50;
const page: number = 1;

function App() {
  const [characters, setCharacters] = useState<Array<characterInfo>>([])

  useEffect(() => {
    const fetchAvatarCharacters = async () => {
      const charactersRaw = await fetchCharactersWithPagination<Character>(endpoint, perPage, page);
      const finalCharacters: characterInfo[] = charactersRaw.map(({_id, photoUrl, name}) => {
        return {
          photoUrl,
          name,
          id: _id,
        }
      })
      setCharacters(finalCharacters);
    }

    fetchAvatarCharacters();

  }, [])


  return (
    <>
      <CardContainer>
        {characters.map(character => (
          <Card src={character.photoUrl} name={character.name} id={character.id} key={character.name}/>
        ))}
      </CardContainer>
    </>
  )
}

export default App
