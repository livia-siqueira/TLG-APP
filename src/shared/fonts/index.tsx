import * as Font from "expo-font";

export const fecthFonts = async() => {
  return await Font.loadAsync({
    "Roboto-Bold": require("../../../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("../../../assets/fonts/Roboto-Light.ttf"),
    "Roboto-ThinItalic": require("../../../assets/fonts/Roboto-ThinItalic.ttf"),
    "Roboto-BoldItalic": require("../../../assets/fonts/Roboto-BoldItalic.ttf"),
  });
};
