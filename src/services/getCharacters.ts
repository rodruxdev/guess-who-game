import axios, { AxiosResponse } from 'axios';

export async function fetchCharacters<T>(endpoint: string, ids: string[]): Promise<T[] | undefined> {
  const charactersPromises: Promise<AxiosResponse<T>>[] = [];
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    const finalEndpoint = `${endpoint}${id}`;
    const characterPromise = axios.get<T>(finalEndpoint);
    charactersPromises.push(characterPromise);
  }
  const allCharactersPromises = Promise.all<AxiosResponse<T>>(charactersPromises);
  try {
    const responses = await allCharactersPromises;
    const charactersInfo = responses.map((response: AxiosResponse<T>): T => response.data);
    return charactersInfo;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error fetching data: ${error.message}`);
    } else {
      throw new Error(`Unexpected error: ${error}`);
    }
  }
}

