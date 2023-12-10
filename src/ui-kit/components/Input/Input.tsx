import React, { FC } from "react";
import { Input as InputANTD } from "antd";
import { InputProps } from "./types";

export const Input: FC<InputProps> = (props) => {
  return (
    <InputANTD {...props} />
  );
};