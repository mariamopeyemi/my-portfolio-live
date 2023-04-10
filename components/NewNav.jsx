import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   title: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   navLink: {
//     marginLeft: theme.spacing(2),
//   },
// }));

function NavBar() {
//   const classes = useStyles();

  return (
    <div className>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
            Opeyemi
          </Typography>
          <div>
            <Button style={{color:'red'}} to="/#hero-section-1">
              Home
            </Button>
            <Button style={{color:'red'}} to="/#about">
              About
            </Button>
            <Button style={{color:'red'}} to="/#project">
              Projects
            </Button>
            <Button style={{color:'red'}} to="/#contact">
              Contact
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;






{/* <div id="about-section">
  // your About component code here
</div>

<div id="project-section">
  // your Project component code here
</div>

<div id="contact-section">
  // your Contact component code here
</div> */}

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   title: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   navLink: {
//     marginLeft: theme.spacing(2),
//   },
// }));

// function NavBar() {
//   const classes = useStyles();

//   const handleAboutClick = () => {
//     document.querySelector('#about-section').scrollIntoView({ behavior: 'smooth' });
//   };

//   const handleProjectClick = () => {
//     document.querySelector('#project-section').scrollIntoView({ behavior: 'smooth' });
//   };

//   const handleContactClick = () => {
//     document.querySelector('#contact-section').scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="sticky">
//         <Toolbar>
//           <Typography variant="h6" className={classes.title}>
//             Opeyemi
//           </Typography>
//           <div>
//             <Button color="inherit" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
//               Home
//             </Button>
//             <Button color="inherit" onClick={handleAboutClick}>
//               About
//             </Button>
//             <Button color="inherit" onClick={handleProjectClick}>
//               Projects
//             </Button>
//             <Button color="inherit" onClick={handleContactClick}>
//               Contact
//             </Button>
//           </div>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

// export default NavBar;
