import { extendTheme } from "@chakra-ui/react";
import { customColors as colors } from "./foundations/colors";
import { customFonts as fonts } from "./foundations/fonts";
import { globalStyles as styles } from "./global";

const customTheme = extendTheme({ colors, styles, fonts });
export { customTheme };
