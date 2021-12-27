import { BetAPI } from "@shared";
import { api } from "..";

export const getBet = async (types: string[]) => {
  try {
    let urlBet = `bet/all-bets`;
    types.forEach((item, index) => {
      if (index === 0) {
        urlBet += `?type%5B%5D=${item}`;
      } else {
        urlBet += `&type%5B%5D=${item}`;
      }
    });
    const data = await api.get(urlBet);
    const bets: BetAPI[] = data.data;
    const newData = [...bets];

    newData.sort((a: BetAPI, b: BetAPI) => {
      const dateOne = new Date(a.created_at).getTime();
      const dateTwo = new Date(b.created_at).getTime();
      return dateTwo - dateOne;
    });
    return newData;
    
  } catch (e: any) {
    throw new Error(e);
  }
};
