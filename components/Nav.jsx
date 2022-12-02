import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useRouter } from 'next/router';
import { FaTimes } from 'react-icons/fa';


// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';


const drawerWidth = 240;
const navItems = ['About', 'Project', 'Contact'];

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}
function DrawerAppBar(props) {
    const router = useRouter();
  const { window } = props;
    // const window;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };



  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
     <Box sx={{
      display: 'flex',
      margin:'auto',
      justifyItems:'space-between',
      alignItems:'center',
      width:'100%',
      gap:'4rem',
     }}>
      <Typography variant="h6" sx={{ml:'1rem'}} >
        Dev Opeyemi
      </Typography>
      < FaTimes  />
     </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { md: 'none', sm: 'block' } }}
          >
            Dev Opeyemi
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Dev Opeyemi
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection:'row'  }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}
              >
              {item}
              </Button>
            ))}
            <Box>
            <Button 
              variant='contained'
              color='secondary'
              onClick={props.toggleTheme}
              sx={{ 
              "&:hover": {
                color: 'gray',
                backgroundColor: 'black',
              },
            }}
              >Toggle Theme</Button>
           </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
