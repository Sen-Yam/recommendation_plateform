import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeIcon from '@mui/icons-material/Home';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import QuizIcon from '@mui/icons-material/Quiz';
import MoreIcon from '@mui/icons-material/More';
import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import ParamsPage from './ParamsPage'; 
import ML from './ML/ML';
import DL from './DL/DL';
import HomePage from './HomePage';
import Soc from './Social/Soc'



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  
  const [open, setOpen] = React.useState(false);
  const [Params, setParams] = React.useState(false);
  const [mL, setmL] = React.useState(false);
  const [More, setMore] = React.useState(false);
  const [Home, setHome] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const[content,setcontent]=React.useState("HomePage");
 
  const theme = createTheme({

    palette: {
      neutral: {
        main: '#DFAC63',
        contrastText: '#000000 ',
      },
    },
  });

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ThemeProvider theme={theme}> 
      <AppBar color="neutral" position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
         
          <Typography variant="h6" noWrap component="div" sx={{width:'100%'}}>
           Recommender System with Machine Learning and Deep Learning architectures
          </Typography>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
      <Drawer variant="permanent" open={open}>
        
        <DrawerHeader sx={{backgroundColor:"#E59D61"}}>
          
          <IconButton onClick={handleDrawerClose}>
            
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        
          
            <ListItem  sx={{flexDirection:'column',backgroundColor:'#E59D61',marginTop:'-1%',marginRight:'0%',height:'110vh'}}>
              <ListItemButton
            onClick={()=>setcontent('HomePage')}
             sx={{
                    background:"#F6DDB9",
                   height:'10vh',
                  width:'100%',
                  border: '10px solid #E59D61',
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}

                
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                  >
                <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary='Home' sx={{marginLeft:'-10%', opacity: open ? 1 : 0 }} />


              </ListItemButton>
       
              <ListItemButton
             onClick={()=>setcontent('mL')}
             sx={{
                    background:"#F6DDB9",
                    height:'10vh',
                    border: '10px solid #E59D61',
                  width:'100%',
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}

                
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                  >
                 <SmartToyTwoToneIcon /> 
                </ListItemIcon>
                <ListItemText primary='ML Approch' sx={{marginLeft:'-10%', opacity: open ? 1 : 0 }} />


              </ListItemButton>
              <ListItemButton
              onClick={()=>setcontent('dL')}
             sx={{
                    background:"#F6DDB9",
                    height:'10vh',
                    border: '10px solid #E59D61',
                  width:'100%',
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}

                
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                  >
                <SmartToyTwoToneIcon />  
                </ListItemIcon>
                <ListItemText primary='DL Approch' sx={{marginLeft:'-10%', opacity: open ? 1 : 0 }} />


              </ListItemButton>
              <ListItemButton
              onClick={()=>setcontent('soc')}
             sx={{
                    background:"#F6DDB9",
                    height:'10vh',
                    border: '10px solid #E59D61',
                  width:'100%',
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}

                
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                  >
                 <SmartToyTwoToneIcon />  
                </ListItemIcon>
                <ListItemText primary='Social Approch' sx={{marginLeft:'-10%', opacity: open ? 1 : 0 }} />


              </ListItemButton>
              <ListItemButton
              onClick={()=>setcontent('dL')}
             sx={{
                    background:"#F6DDB9",
                    height:'10vh',
                    border: '10px solid #E59D61',
                  width:'100%',
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}

                
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                  >
                 <MoreIcon/> 
                </ListItemIcon>
                <ListItemText primary='Hybridation' sx={{marginLeft:'-10%', opacity: open ? 1 : 0 }} />


              </ListItemButton>
            
            </ListItem>
          
       
        <Divider />
   
      </Drawer>
      <Box component="main" sx={{height:'105vh', flexGrow: 5, p: 3,marginTop:'3%',flexDirection:'column',background:'#E59D61'}}>
   
   {content=='HomePage' && <HomePage />}
   {content=='ParamsPage' && <ParamsPage />}
   {content=='mL' && <ML />}
   {content=='dL' && <DL />}
   {content=='soc' && <Soc />}
      </Box>
    </Box>
  );
}