import AsyncStorage from  '@react-native-async-storage/async-storage';
import { api } from "..";
import { CartAPI } from "../../../shared/helpers/types/Game";

export const methodCreateBetAPI = async (body: {games: CartAPI[]}) => {
    try {
       await api.post("bet/new-bet", body)
    }catch(e: any) {
        throw new Error(e.response.data.message)
    }
}