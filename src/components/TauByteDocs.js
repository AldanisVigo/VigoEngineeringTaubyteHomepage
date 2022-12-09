import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './TauByteDocs.css'
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

const TauByteDocs = () => {
    const [drawerOpen,setDrawerOpen] = useState(false)
    const nav = useNavigate()

    return <div>
        <Box sx={{ flexGrow: 1 }}>
            <Drawer open={drawerOpen} onClose={e=>setDrawerOpen(false)}>
            <Button onClick={e=>nav('/')}><BlindIcon/>Home</Button>
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
                <Button color="inherit">Easy Button</Button>
            </Toolbar>
            </AppBar>
        </Box>
        <Container>
            <Row className="mt-5">
                <Col className="d-flex justify-content-center mt-5"><h1>TauByte Experiments</h1></Col>
            </Row>
            <Row>
                <Col>
                    <h2>Creating a simple site with backend CRUD.</h2>
                    <div>
                        <h3>1. Setup a Website for The Front-End</h3>
                        <p>
                            a. Login to tubyte and click on the "Websites" tab on the left panel.
                            <br/>
                            <img alt="website tab left panel" height="400px" src="docs/sidepanelwebsitelink.png"/>
                            <br/>
                            <br/>
                            b. Now click the big green + button in the center of the page.<br/>
                            <img alt="click big green button" height="400px" src="docs/biggreenwebsitebutton.png"/>
                            <br/>
                            <br/>
                            c. Configure your new website. Make sure you give it a name with no spaces or special sauce characters, give it a description, tag it if you want, and generate a new repo with the generated name for it on your github account. Then for the path set it to the root "/" and then click the green check mark to generate a site.
                            <br/>
                            <img alt="configure new site" height="800px" src="docs/configurenewsite.png"/>
                            <br/>
                            <br/>
                            d. Now you can click the green merge button on the bottom right and this will generate a repo and push all your changes to github. The next thing we have to do is make some change on the file structure in order for taubyte to begin the build job on our site.
                            We can do this by cloning into the repo, and making a simple change to the README.md file and then pushing the changes back up to GitHub. This will cause a diff to happen and that's taubytes signal to spin up a build job.
                            You can view the build jobs in the build queue towards the bottom of the left side menu.
                            <br/>
                            <br/>
                            e. After completing this step, you will have three new repositories in your github account. Two of them will be used for adding code and configuring taubyte, and the other will be used for storing the code for the frontend of our website.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <div>
                    <h3>2. Let's Create a "Backend" For Our Website</h3>
                    <ol>
                        <li>
                            <h5>Create a new Database</h5>
                            <p>
                                In order to create our CRUD application, we need to have a database to store our data. We can create a database using the TauByte console. On the left menu find the databases tab.
                                <br/>
                                <img alt="databases tab" height="200px" src="docs/databasestab.png"></img>
                                <br/>
                                <br/>
                                Find the green button at the center of the screen and click it. A dialog will pop up where you can setup your database. Fill it out like this:
                                <br/>
                                <img alt="database dialog" height="470px" src="docs/databasedialog.png"></img>
                            </p>
                        </li>
                        
                        <li>
                            <h5>Create a Function to Add Users to the Database</h5>
                            <p> 
                                Let's begin with the Create operation. Out website will need users so we will create a function that allows us to add a user to the database.
                                Click the functions tab in the left menu, find the green + button in the center of the screen and click it. You will see a dialog like this one pop up. Fill it out like this, don't worry about the code. We will cover adding the code in a later section.
                                <br/>
                                <img alt="write function" height="500px" src="docs/adduserfunc.png"/>
                                <br/>
                            </p>
                        </li>
                        <li>
                            <h5>Create a Function to get a User's Data by Their UUID</h5>
                            <p>
                                Now let's create a function for the Read operation that takes in a UUID and retrieves the user's data from the database. Follow the same steps as the previous function but fill it out like this:
                                <br/>
                                <img alt="getuserbyid function" height="500px" src="docs/getuserbyidfunc.png"/>
                                <br/>
                            </p>
                        </li>
                        <li>
                            <h5>Understanding how Functions Work</h5>
                            <p>
                                When we push all the changes we made to github, two new repositories will be created in your GitHub account. One where you will store the code for your dFunctions, and another where you will store your configuration yaml files which control how TauByte deploys the code.
                            </p>
                            <p>
                            </p>
                        </li>
                    </ol> 
                </div>
            </Row>
        </Container>
    </div>
}

export default TauByteDocs