export interface Band {
    id: number;
    name: string;
    genre: string;
    formed: number;
    location: string;
    members: string[]
    albums: Album[]
}
export interface Album {
    name: string;
    year: number;
}
export interface Places {
    id: number;
    country: string;
    cities: string[]
}