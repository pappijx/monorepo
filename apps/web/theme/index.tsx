// 1. Import the extendTheme function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const styles = {
  global: (props) => ({
    "*": {
      fontSize: "sm",
      color: props.colorMode === "dark" ? "gray.400" : "gray.600",
      backgroundColor: props.colorMode === "dark" ? "gray.900" : "gray.600",
      lineHeight: "tall",
      borderStyle: "dashed !important",
      borderColor:
        props.colorMode === "dark"
          ? "gray.600!important"
          : "gray.600!important",
    },
    a: {
      color: props.colorMode === "dark" ? "teal.300" : "teal.500",
    },
    "*::placeholder": {
      color: mode("gray.400", "whiteAlpha.400")(props),
    },
  }),
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({ config, styles, colors });
