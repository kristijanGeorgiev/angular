export interface Book {
    id: number;
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    publisher: string;
    categories: string[];
    available: boolean;
    condition: string;
    language: string;
}
export interface Category {
    id: number;
    name: string;
}
export interface Publisher {
    id: number;
    name: string;
    country: string;
    foundedYear: number;
    active: boolean;
}