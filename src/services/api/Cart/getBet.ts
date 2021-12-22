import { api } from "..";


export const getBet = async () => {
    try {
        const data = await api.get('bet/all-bets');
        console.log(data)
    }
    catch(e: any) {
        throw new Error(e)
    }
}