import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import {colors} from "../../shared/constants/colors";

interface PropsHeader{
  HeaderButtonComponent: React.FC;
}

export const ButtonHeader = (props : PropsHeader) => {
  return (
    <HeaderButton
      {...props}
      title="Cart"
      IconComponent={Ionicons}
      iconSize={30}
      color={ colors.colorDetailsGreen}
    />
  );
};

