import { api } from "..";
import AsyncStorage from  '@react-native-async-storage/async-storage';
import { TokenApi } from "../../../shared/helpers/types/Game";
import { changePassword } from "./changePassword";



export const resetPassword = async(body: {email: string}) => {
    try{
        const data = await api.post("reset", body)
        if(data.data){
            const token = data.data.token
        }
        return data;
    }
    catch(e: any) {
        console.log(e)
    }
}