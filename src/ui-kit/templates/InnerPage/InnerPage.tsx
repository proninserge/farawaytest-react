import { Layout } from "antd";
import { Footer } from "antd/es/layout/layout";
import React, { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import * as Styled from "./styles";

export const InnerPageTemplate: FC<PropsWithChildren> = () => {
  return (
    <Styled.Layout>
      <Styled.Header>FARAWAY test on SWAPI</Styled.Header>
      <Layout>
        <Styled.Content>
          <Outlet />
        </Styled.Content>
      </Layout>
      <Footer>PROSerge 2023</Footer>
    </Styled.Layout>
  );
};
