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
import { CodeBlock, dracula} from "react-code-blocks";
import Header from './Header'
const TauByteDocs = () => {
    return <div>
        <Header/>
        <Container>
            <Row>
                <Col className="d-flex justify-content-center mt-5"><h1>TauByte Experiments</h1></Col>
            </Row>
            <Row>
                <Col>
                    <h2>Creating a simple site with backend CRUD.</h2>
                    <div>
                        <h3>1. Setup a Website for The Front-End</h3>
                        <p>
                            a. Login to TauByte and click on the "Websites" tab on the left panel.
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
                            d. Now you can click the green merge button on the bottom right and this will generate a repo and push all your changes to github. The next thing we have to do is make some change on the file structure in order for TauByte to begin the build job on our site.
                            We can do this by cloning into the repo, and making a simple change to the README.md file and then pushing the changes back up to GitHub. This will cause a diff to happen and that's TauBytes signal to spin up a build job.
                            You can view the build jobs in the build queue towards the bottom of the left side menu.
                            <br/>
                            <br/>
                            e. After completing this step, you will have three new repositories in your github account. Two of them will be used for adding code and configuring TauByte, and the other will be used for storing the code for the frontend of our website.
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
                                Let's begin by writing the the dFunction that will allow us to send in raw JSON data with user information, and adds the user information to the database we created in the previous steps.
                                To do this we first need to clone the code repository that was generated in our github account when we generated the dFunction. Simply navigate to your github and find the repository prefixed with "tb_code". 
                                Clone that repo to your local machine using git. Navigate into that directory begin by creating a "functions" directory:
                                <CodeBlock
                                    text={"mkdir functions && cd functions\n"}
                                    language={"bash"}
                                    showLineNumbers={false}
                                    startingLineNumber={0}
                                    theme={dracula}
                                    codeBlock 
                                ></CodeBlock>
                                Once inside the functions directory, you have to create the adduser.go file. Simply type in the following commands to generate the adduser.go file.
                                <CodeBlock
                                    text={"touch adduser.go"}
                                    language={"bash"}
                                    showLineNumbers={false}
                                    startingLineNumber={0}
                                    theme={dracula}
                                    codeBlock>
                                </CodeBlock>
                                {/* Now it's time to write some Go code for our adduser.go file. We will do so using VSCode. But before we do so, we will install a useful VSCode plugin that helps
                                with code completion for Go in VSCode. This plugin was pointed out by @Sam from TauByte (<a href="https://discord.com/channels/973677117722202152/1050090176585678898/1050136885898526812" target="_blank" rel="noopener noreferrer">On Discord Channel</a>).
                                So to get this plugin installed type in the following command to get VSCode spun up inside our functions directory */}
                                Though you don't need to get the following VSCode extension, it could help with code completion for go etc. If you'd like to install it on VSCode proceed, if not just skip this step. 
                                <CodeBlock
                                    text={"code ."}
                                    language={"bash"}
                                    showLineNumbers={false}
                                    startingLineNumber={0}
                                    theme={dracula}
                                    codeBlock>
                                </CodeBlock>
                                Once VSCode opens, locate the extensions icon on the left bar and click it.
                                <br/>
                                <img alt="vscode extensions icon" height="500px" src="docs/vscodeexticon.png"/>
                                <br/>
                                Now type in "go" and install the following two extension: "Go"
                                <img alt="vscode go language support extension" height="400px" src="docs/golangsuppext.png"/>
                                <br/>
                                <br/>
                                Once you have the go extension installed in your VSCode, you're ready to rock and roll with syntax
                                completion and highlighting. We can now write the code. Open your adduser.go file in VSCode and paste in
                                the following code.
                                <CodeBlock
                                    text={String.raw`
package lib

import (
	"fmt"
	"io/ioutil"

	"bitbucket.org/taubyte/go-sdk/database"
	"bitbucket.org/taubyte/go-sdk/event"
)

//go:generate go get github.com/mailru/easyjson
//go:generate go install github.com/mailru/easyjson/...@latest
//go:generate easyjson -all \${GOFILE}

//easyjson:json
type User struct {
	UUID string
	name string
	lname string
	age int32
}

//export adduser
func adduser(e event.Event) uint32 {
	//Get the http object from the event
  	h, err := e.HTTP()
		if err != nil {
		return 1
	}

	// //Get a reference to the database
	db, err := database.New("testdb")
	if err != nil {
		return 1
	}

	//Get the Body in the HTTP object
	body := h.Body()
	bodyData, err := ioutil.ReadAll(body)
	if err != nil {
		return 1
	}

	//Close the body
	err = body.Close()
	if err != nil {
		return 1
	}

	//Create an empty user
	incomingUser := &User{}

	//Fill it with the unmarshalled json version of the body data
	err = incomingUser.UnmarshalJSON(bodyData)
	if err != nil {
		return 1
	}

	//Save the user JSON to the the database
	//Ignoring errors from db.Put, h.Write, and UnmarshallJSON
	err = db.Put(incomingUser.UUID,bodyData)
	if err != nil {
		return 1
	}
	
	//Close the db
	err = db.Close()
	if err != nil {
		return 1
	}
	
	//Return a response to the caller
	w, err := h.Write([]byte("{ UUID : " + incomingUser.UUID + ", ADDED: true}"))
	if err != nil{
		return 1
	}

	//Print out result
	fmt.Println(w)

  	return 0
}
                                    `}
                                    highlight={true}
                                    language={"go"}
                                    showLineNumbers={true}
                                    startingLineNumber={0}
                                    theme={dracula}
                                    codeBlock
                                >
                                    
                                </CodeBlock>
                                <br/>
                                Now save the code and open up a terminal within VSCode
                                <img alt="vscode open new terminal" height="200px" src="docs/vscodeterminal.png"/>
                                And then go back to the root of the repository where we created the "functions" directory by typing the
                                following command into the terminal you just opened:
                                <CodeBlock
                                    text={"cd ..\ntouch .gitignore\ncode .gitignore"}
                                    language={"bash"}
                                    showLineNumbers={false}
                                    startingLineNumber={0}
                                    theme={dracula}
                                    codeBlock
                                >
                                </CodeBlock>
                                <h6>Don't necesarily need to do this step read more <a href="https://discord.com/channels/973677117722202152/973677119357988866/1050931163746799667" target="_blank" rel="noopener noreferrer">here</a></h6>
                                This will send you back to the root directory of the repo, add a .gitignore file and open it in VSCode. Next we have to add two new items into the .gitignore file:
                                <ol>
                                    <li>
                                        go.mod
                                    </li>
                                    <li>
                                        go.sum
                                    </li>
                                </ol>
                                After adding these two items into the .gitignore file, we can finally commit and push the dFunction code to the repository.
                                This will cause TauByte to generate a build job for this function. So close the .gitignore file, and return to the terminal we opened
                                in our other instance of VSCode. And drop the following commands.
                                <CodeBlock
                                    text={"go mod init function && go mod tidy\ngit add .\ngit commit -m \"pushing adduser dfunc\"\ngit push origin master"}
                                    language={"bash"}
                                    showLineNumbers={false}
                                    startingLineNumber={0}
                                    theme={dracula}
                                    codeBlock>
                                </CodeBlock>

                            </p>
                        </li>
                    </ol> 
                </div>
            </Row>
        </Container>
    </div>
}

export default TauByteDocs