import React from 'react'
import { useRef, useEffect, useCallback, useState } from 'react'

const FileUploadTest = () => {
    const fileElementRef = useRef()
    const [file,setFile] = useState()
    const [uploadPreview,setUploadPreview] = useState()

    const updateFileList = useCallback(async () => {
        //Send request to function for the list of files
        try{
            const request = await fetch('https://vigocoding.com/getfile',{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    UUID : "aldanisvigo",
                    name : "aldanisvigo"
                })
            })
            const requestJson = await request.json()
            setFile(requestJson.file)
            console.log(requestJson)
        }catch(err){
            console.error(err)
        }
    },[])

    useEffect(()=>{ //As soon as the page loads
        updateFileList() //Retrieve the list of already uploaded images
    },[updateFileList])
    
    const generateUploadPreview = async (e) => {
        const files = fileElementRef.current.files
        setUploadPreview(await toBase64(files[0]))
        //Output list of files selected in the file upload component
        console.log(files)
    }

    const toBase64 = (f) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(f);
        //Remove the first part of the base64 string "data:image/png;base64,"
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = error => reject(error);
    });

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

        console.log(reqBody)

        try{
            //Create a fetch post request to send the files to the dFunc
            const response = await fetch('https://vigocoding.com/uploadfile',{
                method : "POST",
                // Headers seem to be causing a problem, allow headers to be added by the browser
                headers : {
                    "Content-Type" : "application/json"
                },
                body : reqBody
            })

            console.log("Response")
            //Get the json from the response
            const json = await response.json()

            //Log the response to the console for now
            console.log("Response from TauByte:")
            console.log(json)

            updateFileList()

        }catch(err){ //If we encounter an error
            //Log the error to the console for debugging
            console.error(err)
        }
            
    }

    return <div>
        <h3>Upload a File to TauByte</h3>
        <div>
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
        </div>
    </div>
}

export default FileUploadTest