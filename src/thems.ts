import { ThemeConfig, extendTheme } from "@chakra-ui/react";

// Color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

// Extend default theme
const theme = extendTheme({ config });

export default theme;
