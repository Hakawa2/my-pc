import { useState } from "react";
import { InternetExplorerService } from "../service/internet-explorer-service";
import type { Character, RickMorty } from "../types/rick-morty.types";

export function RickAndMorty() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchCharacters, setSearchCharacters] = useState("");
  const { getCharacter } = InternetExplorerService();

  const handleGetCharacters = () => {
    getCharacter(searchCharacters).then(({ results }: RickMorty) => {
      setCharacters(results);
    });
  };

  const handleCleanSearch = () => {
    setCharacters([]);
    setSearchCharacters("");
  };

  return (
    <div>
      <div className="d-flex gap-sm">
        <input
          placeholder="Buscar um personagem"
          value={searchCharacters}
          onChange={(e) => setSearchCharacters(e.target.value)}
        />
        <button onClick={() => handleGetCharacters()}>Buscar</button>
        <button onClick={handleCleanSearch}>Limpar</button>
      </div>
      <div className="d-flex gap-sm wrap">
        {characters.map((i: Character) => (
          <div key={i.id}>
            <img src={i.image} />
            <p>{i.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
