


export type CartAPI = {
    id: string,
    numbers: number[]
  }
  
  export type BetApi = {
    id: number;
    user_id: number;
    game_id: number;
    choosen_numbers: string;
    price: number;
    created_at: string;
    ["type"]: {
      id: string;
      type: string;
    };
  };

  export type UserAPI = {
    created_at: string;
    email: string;
    id: number;
    name: string;
    updated_at: string;
  };
  
  export type TokenAPI = {
    expires_at: string;
    token: string;
    type: string;
  };
  