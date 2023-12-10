import React, { FC } from "react";
import { PaginationProps } from "./types";
import { Pagination as PaginationANTD } from "antd";

export const Pagination: FC<PaginationProps> = (props) => {
  return (
    <PaginationANTD {...props} />
  );
};