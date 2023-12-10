import React, { FC } from "react";
import { Link } from "react-router-dom";
import * as Styled from "./styles";

export const NotFoundPage: FC = () => {
  return (
    <Styled.Container>
            Page ain&apos;t existing
      <Link to="/">Return to Home</Link>
    </Styled.Container>
  );
};