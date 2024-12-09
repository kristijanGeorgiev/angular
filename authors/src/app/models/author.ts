export interface Author {
    id: number;
    name: string;
    birth_date: string;
    death_date: string;
    alive: string;
    nationality: string;
    bibliography: Bibliography[]
}
export interface Bibliography {
    name: string;
    year: number;
    type: string;
}