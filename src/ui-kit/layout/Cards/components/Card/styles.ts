import { Card as CardANTD } from "antd";
import styled from "styled-components";

export const Container = styled(CardANTD)`
    margin-bottom: 10px;

    border-radius: 10px;
    box-shadow:
        0px 1.6px 3.6px 0px rgba(0, 0, 0, 0.14),
        0px 0.2px 0.9px 0.3px rgba(0, 0, 0, 0.12);

    transition: box-shadow 0.333s ease-in-out;

    &:hover {
        box-shadow: 
            0px 6.4px 28px 0px rgba(0, 0, 0, 0.12),
            0px 1.2px 18px 0px rgba(0, 0, 0, 0.08);
    }
`;