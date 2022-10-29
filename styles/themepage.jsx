// declare module '@mui/material/styles' {
//     interface Theme {
//       status: {
//         danger: string;
//       };
//     }
//     // allow configuration using `createTheme`
//     interface ThemeOptions {
//       status?: {
//         danger?: string;
//       };
//     }
//   }
import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import { amber, deepOrange, grey } from '@mui/material/colors';
// import ColorModeContext from ''

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: amber,
            divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            primary: deepOrange,
            divider: deepOrange[700],
            background: {
              default: deepOrange[900],
              paper: deepOrange[900],
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
          }),
    },
  });

  
  export default function App() {
    const [mode, setMode] = React.useState<PaletteMode>('light');
    const colorMode = React.useMemo(
      () => ({
        // The dark mode switch would invoke this method
        toggleColorMode: () => {
          setMode((prevMode) =>
            prevMode === 'light' ? 'dark' : 'light',
          );
        },
      }),
      [],
    );
  
    // Update the theme only if the mode changes
//     const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  
//     return (
//       <ColorModeContext.Provider value={colorMode}>
//         <ThemeProvider theme={theme}>
//           <Page />
//         </ThemeProvider>
//       </ColorModeContext.Provider>
//     );
//   }
  

// import { createTheme } from '@mui/material/styles';
// import { red } from '@mui/material/colors';

// // Create a theme instance.
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#639a30',
//     },
//     secondary: {
//       main: 'rgb(255,165,0)',
//     },
//     error: {
//       main: red.A400,
//     },
//   },
// });

// export default theme;
