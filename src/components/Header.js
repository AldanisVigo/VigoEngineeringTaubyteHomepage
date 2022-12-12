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
import DataObject from '@mui/icons-material/DataObject';
import { useNavigate } from 'react-router-dom'
import Image from '@mui/icons-material/Image'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

const Header = () => {
    const [drawerOpen,setDrawerOpen] = useState(false)
    const nav = useNavigate()

    const playEasySound = (e) => {
        const easySound = new Audio('that_was_easy.mp3')
        easySound.play()
    }
    return <Box sx={{ flexGrow: 1 }}>
        <Drawer open={drawerOpen} onClose={e=>setDrawerOpen(false)}>
            <List>
                <ListItem onClick={e=>nav('/taubytepsudodocs')}>
                    <ListItemButton>
                        <ListItemIcon>
                            <DataObject/>
                        </ListItemIcon>
                        <ListItemText primary="Crud Experiment" />
                    </ListItemButton>
                </ListItem>
                <ListItem onClick={e=>nav('/imageuploadtest')}>
                    <ListItemButton>
                        <ListItemIcon>
                            <Image/>
                        </ListItemIcon>
                        <ListItemText primary="Image Storage Experiment"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
        <AppBar position="fixed">
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
                TauByte Experiments 
                </Typography>
                <Button color="inherit" onClick={playEasySound}>
                <img height="50px" alt="easy button" src="easy_button.png"/>
                </Button>
            </Toolbar>
        </AppBar>
    </Box>
}

export default Header