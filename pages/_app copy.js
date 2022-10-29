// import React from 'react';
// import {
//   ThemeProvider,
//   createTheme,
//   responsiveFontSizes,
// } from '@mui/material/styles';
// import { deepmerge } from '@mui/utils';
// import CssBaseline from '@mui/material/CssBaseline';
// // import Navbar from '../components/NavBar';
// import Nav from '../components/Nav';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { getDesignTokens, getThemedComponents } from '../theme/Theme';
// import { ColorModeContext } from '../config/color-context';

// export default function App({ Component, pageProps }) {
//   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
//   const [mode, setMode] = React.useState();

//   React.useEffect(() => {
//     setMode(prefersDarkMode ? 'dark' : 'light');
//   }, [prefersDarkMode]);
//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//       },
//     }),
//     []
//   );

// let theme = React.useMemo(
//   () =>
//     createTheme(deepmerge(getDesignTokens(mode), getThemedComponents(mode))),
//   [mode]
// );

// theme = responsiveFontSizes(theme);

// return (
//   <ColorModeContext.Provider value={colorMode}>
//     <ThemeProvider theme={theme}>
//     <CssBaseline />
//        {/* Css Baseline -This enables the toggle on all component and for the app's background. */}
//        {/* <Navbar toggleTheme={toggleTheme} /> */}
//        <Nav toggleTheme={toggleTheme} />
//       <Component {...pageProps} toggleTheme={toggleTheme} />
//       {/* <Component {...pageProps}  /> */}
//     </ThemeProvider>
//   </ColorModeContext.Provider>
// );
// }


// const lightTheme = createTheme({
//   palette:{
//     mode: 'light',
//     primary:{
//       main: '#34C0AC',
//       light: '#B1DED3',
//       dark: '#00765A',
//     },
//     background: {
//       default: deepOrange[900],
//       paper: deepOrange[900],
//     },
//     text: {
//       primary: '#fff',
//       secondary: grey[500],
//     },
//   }
// })


// const lightTheme = createTheme({
//   palette:{
//     mode: 'light',
//     primary,
//   }
// })
// const darkTheme = createTheme({
//   palette:{
//     mode: 'dark'
//   }
// })