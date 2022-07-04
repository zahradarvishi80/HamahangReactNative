import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
const fontConfig = {
  android: {
    regular: {
      fontFamily: 'IRANYekanMobileRegular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'IRANYekanMobileMedium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'IRANYekanMobileLight',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'IRANYekanMobileThin',
      fontWeight: 'normal',
    },
  },
};
export const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
};
