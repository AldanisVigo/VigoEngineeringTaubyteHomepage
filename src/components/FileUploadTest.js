import React from 'react'
import { useRef, useEffect, useCallback, useState } from 'react'
import { CircularProgress } from '@mui/material'
const FileUploadTest = () => {
    const fileElementRef = useRef()
    //State variable to hold our currently uploaded file as base 64 string
    const [file,setFile] = useState()

    //State variabe to hold the preview image file as a base 64 string
    const [uploadPreview,setUploadPreview] = useState()
    
    //State variable to keep track of when files are uploading
    const [uploading,setUploading] = useState(false)

    /*
        Function will go get the currently uploaded file from the TauByte storage
    */
    const getCurrentFile = useCallback(async () => {
        //Send request to function for the list of files
        try{    
            //Let's call our endpoint to get our file
            const request = await fetch('https://vigocoding.com/getfile',{
                method : "POST", //Make it a post request
                headers : {
                    "Content-Type" : "application/json" //Set the content type headers to json
                },
                body : JSON.stringify({
                    UUID : "aldanisvigo", //We want the file for the user with UUID aldanisvigo
                    name : "aldanisvigo" //And we want the file named aldanisvigo
                    //This will store the file at path teststorage/UUID/name in TauByte storage
                })
            })

            //Get the json from the request response
            const requestJson = await request.json()

            //Set the file from the request response
            setFile(requestJson.file)
            setUploading(false)
            setUploadPreview(null)
        }catch(err){ //Catch any errors while executing the request
            console.error(err) //And output the error on the console
            setUploading(false) //Set uploading to false
            //Clear the preview
            setUploadPreview(null)
        }
    },[])

    /*
        Hook to get currently uploaded file as soon as the page loads
    */
    useEffect(()=>{ //As soon as the page loads
        getCurrentFile() //Retrieve the list of already uploaded images
    },[getCurrentFile])
    

    /*
        This function will generate a preview image base64 encoded string with the contents 
        of the preview image file
    */
    const generateUploadPreview = async (e) => {
        const files = fileElementRef.current.files //Grab the files from the input
        setUploadPreview(await toBase64(files[0])) //Convert the first file to a base64 string as set the preview variable
    }

    /*
        This function will grab a file and return a promise that resolves to the 
        base64 encoded string representing the contents of the file.
    */
    const toBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader() //Create a file reader
        reader.readAsDataURL(file) //Read the file as a data url
        //Remove the first part of the base64 string "data:image/png;base64,"
        reader.onload = () => resolve(reader.result.split(',')[1])
        //Reject if we have any errors
        reader.onerror = error => reject(error);
    })

    /*
        This function uploads the selected file to TauByte storage
    */
    const uploadNewImage = async (e) => {
        //Log the list of files to upload
        const file = await fileElementRef.current.files[0]

        //Log the file
        console.log("Uploading the following files to TauByte storage")        

        //Convert the file to a base 64 string
        const dataUrl = await toBase64(file)

        //Generate a request body
        const reqBody = JSON.stringify({
            UUID : "aldanisvigo",
            filePath : "aldanisvigo",
            file : dataUrl
        })

        //Try to upload the image
        try{
            //Set uploading to true
            setUploading(true)

            //Create a fetch post request to send the files to the dFunc
            const response = await fetch('https://vigocoding.com/uploadfile',{
                method : "POST", //Set it to a POST request
                headers : {
                    "Content-Type" : "application/json" //Change the header's Content-Type parameter to json
                },
                body : reqBody //Attach the request body we generated previously
            })

            //Get the json from the response
            const json = await response.json()

            //Get the currently uploaded file back from TauByte storage
            getCurrentFile()
            

        }catch(err){ //If we encounter an error
            //Log the error to the console for debugging
            console.error(err)

            //Alert the user of the error
            alert(err.message)

            //Remove the preview
            setUploadPreview(null)

            //Set uploading to false
            setUploading(false)
        }   
    }

    /*
        Generate the view
    */
    return <div>
        <h3>Upload a File to TauByte</h3>
        {!uploading && <div>
            <h3>Please select an image file: (.png, .jpeg, .jpg only) </h3>
            <input accept=".png,.jpeg,.jpg" type="file" ref={fileElementRef} onChange={generateUploadPreview}/>
            <button onClick={uploadNewImage}>Upload Image</button>
            <br/>
            {uploadPreview && <div>
                <h4>Upload Preview</h4>
                {uploadPreview && <img alt="upload preview" width="300" src={"data:image/png;base64," + uploadPreview}></img>}
                <br/>
            </div>}
            <h4>Currently Uploaded Image</h4>
            {file && <img alt="currently uploaded" width="300" src={"data:image/png;base64," + file}></img>}
        </div>}
        {uploading && <div>
            Uploading Image to TauByte Storage, Please wait ....<br/>
            <CircularProgress/>
        </div>}
    </div>
}

export default FileUploadTest