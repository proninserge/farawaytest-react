import React, { FC } from "react";
import { CardsProps } from "./types";
import * as Styled from "./styles";
import { Card } from "./components";

export const Cards: FC<CardsProps> = (props) => {
  const { data } = props;

  return (
    <Styled.Container>
      {data.map(character => (<Card key={character.name} {...character} />))}
    </Styled.Container>
  );
};