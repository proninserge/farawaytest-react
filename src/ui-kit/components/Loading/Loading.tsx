import { Spin } from "antd";
import React, { FC } from "react";
import { LoadingProps } from "./types";
import * as Styled from "./styles";

export const Loading: FC<LoadingProps> = (props) => {
  return (
    <Styled.Container>
      <Spin size="large" {...props} />
    </Styled.Container>
  );
};