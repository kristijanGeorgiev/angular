export interface Movie {
    id: number;
    title: string;
    year: number;
    director: string;
    genre: string[];
    plot: string;
    oscars: { [oscarType: string]: string };
    rating: number;
    cast: Cast[];
  };
export interface Cast {
  actor: string;
  character: string;
}