import { api } from "..";
import { TokenAPI } from "@shared";



export const resetPassword = async(body: {email: string}) => {
    try{
        const data = await api.post("reset", body)
        if(data.data){
            const token  : TokenAPI= data.data.token
        }
        return data;
    }
    catch(e: any) {
        console.log(e)
    }
}