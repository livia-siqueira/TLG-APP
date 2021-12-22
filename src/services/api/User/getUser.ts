import { api } from "..";


export const getUser = async () => {
    try{
        const user = await api.get('user/my-account')
        console.log(user)
    }catch(e: any) {

    }
}