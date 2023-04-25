/** @type { import('@storybook/react').Preview } */
import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { lightTheme, darkTheme, dittoTheme } from '../src/themes/themes';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
  themes: {
    Light: lightTheme,
    Dark: darkTheme,
    Ditto: dittoTheme,
  },
  defaultTheme: 'Light',
  Provider: ThemeProvider,
  GlobalStyles: CssBaseline,
})];

export default preview;
