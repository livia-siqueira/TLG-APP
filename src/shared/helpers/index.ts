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
