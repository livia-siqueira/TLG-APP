import { api } from "..";

export const gamesFetch = async() => {
    try{
        const games = await api.get("cart_games")
        return games.data;
    }catch(e: any){

    }
}