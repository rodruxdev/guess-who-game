import axios, { AxiosResponse } from 'axios';

export async function fetchCharactersWithPagination<T>(endpoint: string, perPage: number, page: number): Promise<T[]> {
  try {
    const response: AxiosResponse<T[]> = await axios.get(endpoint, {
      params: {
        perPage,
        page,
      },
    });
    return response.data;
  } catch (error: unknown) {
    if(error.message){
      throw new Error(`Error fetching data: ${error.message}`);
    }
  }
}
