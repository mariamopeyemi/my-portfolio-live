// import '../styles/globals.css';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import react, {useState, useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '../components/NavBar';
import Nav from '../components/Nav';


// Create a theme instance.
const lightTheme = createTheme({
  palette:{
    mode: 'light'
  }
})
const darkTheme = createTheme({
  palette:{
    mode: 'dark'
  }
})

function getActiveTheme(themeMode){
  return themeMode === 'light' ? lightTheme : darkTheme
  
}
function MyApp({ Component, pageProps }) {
  const [activeTheme, setActiveTheme] = useState(lightTheme);
  // const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>('light');
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
    <ThemeProvider theme={activeTheme} >
       <CssBaseline />
       {/* Css Baseline -This enables the toggle on all component and for the app's background. */}
       {/* <Navbar toggleTheme={toggleTheme} /> */}
       <Nav toggleTheme={toggleTheme} />
      <Component {...pageProps} toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

export default MyApp
