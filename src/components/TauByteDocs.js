import React from 'react'
import './TauByteDocs.css'

const TauByteDocs = () => {
    return <div>
        <h1>Tau Byte PsudoDocs</h1>
        <div>
            <h3>1. Setup a website.</h3>
            <p>
                a. Login to tubyte and click on the website tab on the left panel.
                <br/>
                <img height="400px" src="docs/sidepanelwebsitelink.png"/>
                <br/>
                b. Now click the big green + button in the center of the page.<br/>
                <img height="400px" src="docs/biggreenwebsitebutton.png"/>
                <br/>
                c. Configure your new website. Make sure you give it a name with no spaces or special sauce characters, give it a description, tag it if you want, and generate a new repo with the generated name for it on your github account. Then for the path set it to the root "/" and then click the green check mark to generate a site.
                <br/>
                <img height="800px" src="docs/configurenewsite.png"/>
                <br/>
                e. Now you can click the green merge button on the bottom right and this will generate a repo and push all your changes to github. The next thing we have to do is make some change on the file structure in order for taubyte to begin the build job on our site.
                We can do this by cloning into the repo, and making a simple change to the README.md file and then pushing the changes back up to GitHub. This will cause a diff to happen and that's taubytes signal to spin up a build job.
                You can view the build jobs in the build queue towards the bottom of the left side menu.
            </p>
        </div>
    </div>
}

export default TauByteDocs