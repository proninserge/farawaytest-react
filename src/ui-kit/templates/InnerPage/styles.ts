import styled from "styled-components";
import { Layout as LayoutANTD } from "antd";
import { Content as ContentANTD, Header as HeaderANTD } from "antd/es/layout/layout";

export const Layout = styled(LayoutANTD)`
    height: 100vh;
`;

export const Content = styled(ContentANTD)`
    flex-grow: 1;
`;

export const Header = styled(HeaderANTD)`
    background-color: #65a9f3;
`;