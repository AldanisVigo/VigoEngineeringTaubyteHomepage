import './App.css';
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import BlindIcon from '@mui/icons-material/Blind';
import { useNavigate } from 'react-router-dom'

const App = () => {
  const [drawerOpen,setDrawerOpen] = useState(false)
  const nav = useNavigate()

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Drawer open={drawerOpen} onClose={e=>setDrawerOpen(false)}>
          <Button onClick={e=>nav('/taubytepsudodocs')}><BlindIcon/>My TauByte Notes</Button>
        </Drawer>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={e=>setDrawerOpen(!drawerOpen)}
            >
              <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Vigo's Stash of Goodness
              </Typography>
              <Button color="inherit">Easy Button</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default App;
