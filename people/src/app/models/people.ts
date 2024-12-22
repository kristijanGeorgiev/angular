export interface People {
    id: number;
    name: string;
    city: string;
    age: number;
    friends: Friends[];
}
export interface Friends {
    name: string;
    hobbies: string[];
}