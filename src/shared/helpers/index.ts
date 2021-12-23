export { useDispatch, useSelector } from "react-redux";
export { NativeStackScreenProps } from "@react-navigation/native-stack";
export { NavigationScreenProp } from "react-navigation";
export  { HeaderButtons, Item } from "react-navigation-header-buttons";
export  { useCallback, useEffect, useState} from "react";

import  'intl' ; 
import  'intl/locale-data/jsonp/en' ; 

export  function formatNumber(number: number){
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(number)
}

export function sortNumber(numbers: number[]) {
  return numbers.sort((a, b) => {
    return a-b;
  })
}

export const sameValues = (ofState: number[], ofPayload: number[]) => {
  return (
    ofState.length === ofPayload.length &&
    ofState.every((item, index) => item === ofPayload[index])
  );
};