import { RootState } from "@types";
import { useSelector } from "react-redux";
import AuthNavigator from "./AuthNavigator";
import { AppNavigator } from "./GameNavigator";




export const Navigator = () => {
    const userActual = useSelector((state : RootState) => state.user.userActual);

    if(userActual) {
        return <AppNavigator />;
    }
    else{
        return <AuthNavigator/>;
    }
}