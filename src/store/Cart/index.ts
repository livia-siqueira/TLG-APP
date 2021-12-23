import { sameValues } from "@helpers";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Bet } from "@types";

interface state {
  bets: Bet[];
  totalCart: number;
}

const initialState: state = {
  bets: [],
  totalCart: 0,
};

export const controlCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addBetCart: (state, action: PayloadAction<Bet>) => {
    

      if (state.bets.length === 0) {
        state.bets.push(action.payload);
      }
      const p = state.bets.map((bet) => {
        return sameValues(bet.choosen_numbers, action.payload.choosen_numbers);
      });
      const betExist = p.filter((exist) => {
        return exist === true;
      });
      if (betExist.length === 0) {
        state.bets.push(action.payload);
      }
      state.totalCart += action.payload.price;
      return state;
    },
    removeBetCart: (state, action: PayloadAction<number[]>) => {
        const p = state.bets.map((bet) => {
            return sameValues(bet.choosen_numbers, action.payload);
          });
        const betIndex = p.indexOf(true);
        state.totalCart -= state.bets[betIndex].price
        const newBets = state.bets.filter((bet, index) => {
           return index !== betIndex
        })

        state.bets = newBets;
       
        console.log(betIndex);
       return state;

    },
  },
});

export const { addBetCart, removeBetCart } = controlCart.actions;
export default controlCart.reducer;
