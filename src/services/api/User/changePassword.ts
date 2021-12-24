import { api } from "..";
import AsyncStorage from  '@react-native-async-storage/async-storage';



export const changePassword = async(body: { token: string, newPassword: {password: string}}) => {
    try{
        const data = await api.post(`reset/${body.token}`, body.newPassword);
        return data;
    }
    catch(e: any) {
        console.log(e)
    }
}