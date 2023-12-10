import React, { FC } from "react";
import { CardProps } from "./types";
import { Link } from "react-router-dom";
import * as Styled from "./styles";

export const Card: FC<CardProps> = (props) => {
  const { name, url, birth_year } = props;

  const charId = url.split("/").at(-2);

  return (
    <Styled.Container
      type="inner"
      title={name}
      extra={<Link to={`/character/${charId}`}>Details</Link>}
    >
      Born {birth_year}
    </Styled.Container>
  );
};