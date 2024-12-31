// TODO: write documentation about fonts and typography along with guides on how to add custom fonts in own
// markdown file and add links from here

import {
  Nunito_300Light as lightLo,
  Nunito_400Regular as regularLo,
  Nunito_500Medium as mediumLo,
  Nunito_600SemiBold as semiBoldLo,
  Nunito_700Bold as boldLo,
} from "@expo-google-fonts/nunito"
import { Platform } from "react-native"

export const customFontsToLoad = {
  lightLo,
  regularLo,
  mediumLo,
  semiBoldLo,
  boldLo,
}

const fonts = {
  primary: {
    // Cross-platform Google font.
    light: Platform.OS === "web" ? "light" : "lightLo",
    normal: Platform.OS === "web" ? "regular" : "regularLo",
    medium: Platform.OS === "web" ? "medium" : "mediumLo",
    semiBold: Platform.OS === "web" ? "semiBold" : "semiBoldLo",
    bold: Platform.OS === "web" ? "bold" : "boldLo",
  },
}

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.primary,
}
