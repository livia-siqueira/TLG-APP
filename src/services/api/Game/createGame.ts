import { api } from "..";


export const createGame = (body : {
    type: string,
    description: string,
    max_number: number,
    range: number,
    price: number,
    color: string,
}) => {
    const data = api.post("admin/create-game", body);
    console.log(data);
}