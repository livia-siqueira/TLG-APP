import AsyncStorage from  '@react-native-async-storage/async-storage';
import { api } from "..";
import { ApiError, TokenApi } from "../../../shared/types";

export const loginUserAPI = async (dataUser: {
    email: string,
    password: string,
}) => {
    try {
        const data = await api.post("login", dataUser)
        const resp = data.data;
        if(resp.user){
            const token : TokenApi = resp.token;
            resp.user.token = token.token;
            await AsyncStorage.setItem("@token", token.token)
            return resp;
        }
        if(resp.error){
            const error : ApiError = resp.error;
            throw new Error(error.message)
        }
    }catch(e: any) {
        throw new Error(e.response.data.error.message)
    }
}