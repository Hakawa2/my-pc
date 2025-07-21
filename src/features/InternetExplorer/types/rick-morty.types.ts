export type RickMorty = {
  info: Pagination;
  results: Character[];
};

export type Character = {
  id: number;
  name: string;
  url: string;
  image: string;
};

type Pagination = {
  count: number;
  next: number | null;
  pages: number;
  prev: number | null;
};
