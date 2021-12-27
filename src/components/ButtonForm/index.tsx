import React from "react";
import * as styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../shared/constants";

interface Button {
  title: string;
  eventClick?: () => void
}

export const ButtonForm = ({ title, eventClick }: Button) => {
  return (
    <styles.Button activeOpacity={0.6} onPress={eventClick ? eventClick : () => {}}>
      {title === "Back" ? (
          <styles.TextButton style={{ color: colors.colorTextTitle, marginHorizontal: 100}} >
            <AntDesign
              name="arrowleft"
              size={24}
              color={colors.colorTextTitle}
            />
            {title}
          </styles.TextButton>
      ) : (
        <styles.TextButton>
          {title}
          <AntDesign
            name="arrowright"
            size={24}
            color={colors.colorDetailsGreen}
          />
        </styles.TextButton>
      )}
    </styles.Button>
  );
};
