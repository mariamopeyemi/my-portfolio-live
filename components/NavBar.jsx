import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { purple } from '@mui/material/colors';

const pages = ['About', 'Project', 'Contact'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar({toggleTheme }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  return (
    <Box sx={{display: 'flex', backGroundColor: purple[500], flexDirection:'row', justifyContent:'space-between'
  }}
   >
    
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Dev Opeyemi Laptop
          </Typography>
          <Box sx={{  display: { xs: 'none', md: 'flex' } }}>
           {pages.map((page) => (
             <Button
               key={page}
               onClick={handleCloseNavMenu}
               sx={{ my: 2, color: 'black', display: 'block' }}
             >
               {page}
               jjjj
             </Button>
           ))}
           <Button 
           variant='contained'
           color='secondary'
           onClick={toggleTheme}
           >Toggle Theme</Button>
         </Box>
    </Box>
  );
  // return (
  //   <Box sx={{display: 'flex', 
  //   backGroundColor:'red', flexDirection:'row', justifyContent:'space-between'
  //   }}>

  //   <AppBar position="static" component='nav'>
  //     <Container maxWidth="xl" >
  //     <Toolbar 
  //     disableGutters 
  //       >
  //         <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          
          
  //         <Typography
  //           variant="h6"
  //           noWrap
  //           component="a"
  //           href="/"
  //           sx={{
  //             mr: 2,
  //             display: { xs: 'none', md: 'flex' },
  //             fontFamily: 'monospace',
  //             fontWeight: 700,
  //             letterSpacing: '.3rem',
  //             color: 'inherit',
  //             textDecoration: 'none',
  //           }}
  //         >
  //           Dev Opeyemi Laptop
  //         </Typography>

  //         <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
  //           <IconButton
  //             size="large"
  //             aria-label="account of current user"
  //             aria-controls="menu-appbar"
  //             aria-haspopup="true"
  //             onClick={handleOpenNavMenu}
  //             color="inherit"
  //           >
  //             <MenuIcon />
  //           </IconButton>
  //           <Menu
  //             id="menu-appbar"
  //             anchorEl={anchorElNav}
  //             anchorOrigin={{
  //               vertical: 'bottom',
  //               horizontal: 'left',
  //             }}
  //             keepMounted
  //             transformOrigin={{
  //               vertical: 'top',
  //               horizontal: 'left',
  //             }}
  //             open={Boolean(anchorElNav)}
  //             onClose={handleCloseNavMenu}
  //             sx={{
  //               display: { xs: 'block', md: 'none' },
  //             }}
  //           >
  //             {pages.map((page) => (
  //               <MenuItem key={page} onClick={handleCloseNavMenu}>
  //                 <Typography textAlign="center">{page}</Typography>
  //               </MenuItem>
  //             ))}
  //           </Menu>
  //         </Box>
  //         <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
  //         <Typography
  //           variant="h5"
  //           noWrap
  //           component="a"
  //           href=""
  //           sx={{
  //             mr: 2,
  //             display: { xs: 'flex', md: 'none' },
  //             flexGrow: 1,
  //             fontFamily: 'monospace',
  //             fontWeight: 700,
  //             letterSpacing: '.3rem',
  //             color: 'inherit',
  //             textDecoration: 'none',
  //           }}
  //         >
  //           Dev Opeyemi
  //         </Typography>
  //         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
  //           {pages.map((page) => (
  //             <Button
  //               key={page}
  //               onClick={handleCloseNavMenu}
  //               sx={{ my: 2, color: 'white', display: 'block' }}
  //             >
  //               {page}
  //               jjjj
  //             </Button>
  //           ))}
  //           <Button 
  //           variant='contained'
  //           color='secondary'
  //           onClick={toggleTheme}
  //           >Toggle Theme</Button>
  //         </Box>
  //         {/* <Box sx={{
  //         backGroundColor: 'primary.light'
  //       }}>
  //       <Button 
  //       variant='contained'
  //       color='secondary'
  //       onClick={toggleTheme}
  //       >Toggle Theme</Button>
  //       </Box> */}
  //       <div>
  //         {/* <Box sx={{ flexGrow: 0 }}>
  //           <Tooltip title="Open settings">
  //             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
  //               <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
  //             </IconButton>
  //           </Tooltip>
  //           <Menu
  //             sx={{ mt: '45px' }}
  //             id="menu-appbar"
  //             anchorEl={anchorElUser}
  //             anchorOrigin={{
  //               vertical: 'top',
  //               horizontal: 'right',
  //             }}
  //             keepMounted
  //             transformOrigin={{
  //               vertical: 'top',
  //               horizontal: 'right',
  //             }}
  //             open={Boolean(anchorElUser)}
  //             onClose={handleCloseUserMenu}
  //           >
  //             {settings.map((setting) => (
  //               <MenuItem key={setting} onClick={handleCloseUserMenu}>
  //                 <Typography textAlign="center">{setting}</Typography>
  //               </MenuItem>
  //             ))}
  //           </Menu>
  //         </Box> */}
  //         </div>
  //       </Toolbar>
  //     </Container>
  //   </AppBar>

  //   </Box>
  // );
}
export default ResponsiveAppBar;
