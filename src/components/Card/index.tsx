import React from "react";
import { Container } from "./styles";



export const Card : React.FC = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}