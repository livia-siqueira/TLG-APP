import AsyncStorage from  '@react-native-async-storage/async-storage';
import { api } from "..";
import { ApiError, TokenApi } from "../../../shared/helpers/types/Game";

export const methodCreateUserAPI = async (dataUser: {
    email: string,
    password: string,
    name: string
}) => {
    try {
        const data = await api.post("user/create", dataUser)
        const resp = data.data;
        if(resp.user){
            const token : TokenApi = resp.token;
            await AsyncStorage.setItem("@token", token.token)
            return resp
        }
        if(resp.error){
            const error : ApiError = resp.error;
            console.log(error)
            return error;
        }
    }catch(e: any) {
        return e.response.data.error.message
    }
}