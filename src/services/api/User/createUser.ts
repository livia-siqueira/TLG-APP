import AsyncStorage from  '@react-native-async-storage/async-storage';
import { api } from "..";
import { TokenAPI } from "@shared";

export const methodCreateUserAPI = async (dataUser: {
    email: string,
    password: string,
    name: string
}) => {
    try {
        const data = await api.post("user/create", dataUser)
        const resp = data.data;
        if(resp.user){
            const token : TokenAPI = resp.token;
            await AsyncStorage.setItem("@token", token.token)
            return resp
        }
        if(resp.error){
           throw new Error(resp.error);
        }
    }catch(e: any) {
        return e.response.data.error.message
    }
}