import { api } from "..";


export const getUser = async () => {
    try{
        const user = await api.get('user/my-account')
        return user.data;
    }catch(e: any) {

    }
}