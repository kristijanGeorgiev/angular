export interface Episode {
    id: number;
    title: string;
    series: number;
    era: string;
    broadcast_date: string;
    director: string;
    writer: string;
    plot: string;
    doctor: Doctor;
    companion: Companion;
    cast: Cast[]
}
export interface Doctor {
    actor: string;
    incarnation: string;
}
export interface Companion {
    actor: string;
    character: string;
}
export interface Actor {
    id: number;
    name: string;
}
export interface Cast {
    actor: string;
    character: string;
}