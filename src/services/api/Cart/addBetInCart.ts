import { api } from "..";
import { CartAPI } from "@shared";

export const methodCreateBetAPI = async (body: {games: CartAPI[]}) => {
    try {
       await api.post("bet/new-bet", body)
    }catch(e: any) {
        throw new Error(e.response.data.message)
    }
}