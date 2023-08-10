import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import CardContainer from './containers/CardContainer'
import { fetchCharacters } from './services/getCharacters'

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

const endpoint: string = "https://last-airbender-api.fly.dev/api/v1/characters/";
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
]
// const perPage: number = 500;
// const page: number = 1;

function App() {
  const [characters, setCharacters] = useState<Array<characterInfo>>([])

  useEffect(() => {
    const fetchAvatarCharacters = async () => {
      const charactersRaw = await fetchCharacters<Character>(endpoint, ids);
      let finalCharacters: characterInfo[] = []
      if(charactersRaw !== undefined){
        finalCharacters = charactersRaw.map(({_id, photoUrl, name}) => {
          return {
            photoUrl,
            name,
            id: _id,
          }
        })
      }
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
