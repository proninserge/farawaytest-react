import React, { FC } from "react";
import { Input } from "../../../../ui-kit";
import { SearchProps } from "./types";
import * as Styled from "./styles";

export const Search: FC<SearchProps> = (props) => {
  const { search, setSearch } = props;

  return (
    <Styled.Container>
      <Input value={search} onChange={setSearch} placeholder="Enter the name" />
    </Styled.Container>
  );
};