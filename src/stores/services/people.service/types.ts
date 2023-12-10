import { Link } from "../types";

export type CharacterId = string;

export namespace PeopleData {
    export type Params = {
        page: number | string;
        search: string;
    };

    export type Response = {
        count: number;
        next: Link;
        previous: Link;
        results: Character[];
    };

    export type Character = {
        name: string,
        height: string,
        mass: string,
        hair_color: string,
        skin_color: string,
        eye_color: string,
        birth_year: string,
        gender: string,
        homeworld: Link,
        films: Link[],
        species: Link[],
        vehicles: Link[],
        starships: Link[],
        created: string, // Date
        edited: string, // Date
        url: Link,
    };
};