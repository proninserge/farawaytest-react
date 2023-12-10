import { SyntheticEvent } from "react";

export type SearchProps = {
    search: string;
    setSearch: (evt: SyntheticEvent) => void;
};