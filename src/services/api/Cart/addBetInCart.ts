import AsyncStorage from  '@react-native-async-storage/async-storage';
import { api } from "..";
import { ApiError, TokenApi } from "../../../shared/types";

export const methodCreateBetAPI = async (dataUser: {
    numbers: number[],
    idUser: number,
    idTypeGame: number,
    price: number
}) => {
    try {
        const data = await api.post("bet/new-bet", dataUser)
        const resp = data.data;
        console.log(resp)
        /*if(resp.user){
            const token : TokenApi = resp.token;
            await AsyncStorage.setItem("@token", token.token)
            return resp
        }
        if(resp.error){
            const error : ApiError = resp.error;
            throw new Error(error.message)
        }*/
    }catch(e: any) {
        throw new Error(e.response.data.message)
    }
}