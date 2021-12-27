import { RootState } from "@types";
import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../../components/Card";
import * as styles from "./styles"


export const NewGame : React.FC = () => {
    return (
        <Card>
            <styles.Input placeholder="Name"/>
            <styles.Input placeholder="Range" />
            <styles.Input placeholder="Max-Number"/>
            <styles.Input placeholder="Description"/>
            <styles.Input placeholder="Price"/>
            <styles.Button>
            <styles.TextButton>Save</styles.TextButton>
        </styles.Button>
        </Card>
    )
}