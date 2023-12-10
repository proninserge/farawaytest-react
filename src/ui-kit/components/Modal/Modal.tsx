import React, { FC, PropsWithChildren } from "react";
import { Modal as ModalANTD } from "antd";
import { ModalProps } from "./types";

export const Modal: FC<PropsWithChildren<ModalProps>> = (props) => {
  const { children, ...rest } = props;
    
  return (
    <ModalANTD {...rest}>
      {children}
    </ModalANTD>
  );
};