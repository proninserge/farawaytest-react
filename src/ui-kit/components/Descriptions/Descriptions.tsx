import React, { FC } from "react";
import { Descriptions as DescriptionsANTD } from "antd";
import { DescriptionsProps } from "./types";

export const Descriptions: FC<DescriptionsProps> = (props) => {
  return (
    <DescriptionsANTD {...props} />
  );
};