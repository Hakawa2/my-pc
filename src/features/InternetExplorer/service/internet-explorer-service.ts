import { Requests } from "@/services/rest-api.config";
import type { RickMorty } from "../types/rick-morty.types";

export function InternetExplorerService() {
  const { get } = Requests();

  const getCharacter = async (name: string) => {
    const data = {
      url: `https://rickandmortyapi.com/api/character?name=${name}`,
    };
    return (await get(data)) as RickMorty;
  };

  return {
    getCharacter,
  };
}
