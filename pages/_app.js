import {ThemeProvider, createTheme} from '@mui/material/styles';
import {useState, useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '../components/NavBar';
import Nav from '../components/Nav';
import { ColorModeContext } from '../config/color-context';
import { red, blue , brown} from '@mui/material/colors';


// Create a theme instance.
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: red[500],
//     },
//   },
// });

// const getDesignTokens = (mode) => ({
//   palette: {
//     mode,
//     primary: {
//       ...amber,
//       ...(mode === 'dark' && {
//         main: amber[300],
//       }),
//     },
//     ...(mode === 'dark' && {
//       background: {
//         default: deepOrange[900],
//         paper: deepOrange[900],
//       },
//     }),
//     text: {
//       ...(mode === 'light'
//         ? {
//             primary: grey[900],
//             secondary: grey[800],
//           }
//         : {
//             primary: '#fff',
//             secondary: grey[500],
//           }),
//     },
//   },
// });
// rgb(248,208,148)brown rgb(45,42,36)coffee
// 'primary.main'
const lightTheme = createTheme({
  palette:{
    mode: 'light',
    primary:{
      main: 'rgb(45,42,36)',
      light: '#B1DED3',
      dark: '#00765A',
    },
    secondary:{
      main: brown[300],
      light: '#B1DED3',
      dark: '#00765A',
    },
    background: {
      default: 'rgb(248,208,148)',
      paper: 'rgb(248,208,148)',
    },
    text: {
      // primary: '#fff',
      // secondary: grey[500],
    },
  }
})
const darkTheme = createTheme({
  palette:{
    mode: 'dark',
    primary:{
      main: red[500],
      // light: '#B1DED3',
      // dark: '#00765A',
    },
    background: {
      // default: 'rgb(248,208,148)',
      // paper: 'rgb(248,208,148)',
    },
    text: {
      // primary: '#fff',
      // secondary: grey[500],
    },
  }
})

function getActiveTheme(themeMode){
  return themeMode === 'light' ? lightTheme : darkTheme
  
}
function MyApp({ Component, pageProps }) {
  // const theme = useTheme();

  const [activeTheme, setActiveTheme] = useState(lightTheme);
  const [selectedTheme, setSelectedTheme] = useState('light');

  const toggleTheme=()=>{
    const desiredTheme = selectedTheme === 'light' ? 'dark' : 'light';

    setSelectedTheme(desiredTheme);
    // setActiveTheme(desiredTheme === 'light' ? lightTheme : darkTheme);
  }


  useEffect(() => {
    setActiveTheme(getActiveTheme(selectedTheme))
  }, [selectedTheme])
  

  return (
    <ColorModeContext.Provider value={toggleTheme}>
      <ThemeProvider theme={activeTheme} >
        <CssBaseline />
        {/* Css Baseline -This enables the toggle on all component and for the app's background. */}
        {/* <Navbar toggleTheme={toggleTheme} /> */}
        <Nav toggleTheme={toggleTheme} />
        <Component {...pageProps} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </ColorModeContext.Provider>

  )
}

export default MyApp

