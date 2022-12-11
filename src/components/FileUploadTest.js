import React from 'react'
import { useRef, useEffect, useCallback, useState } from 'react'

const FileUploadTest = () => {
    const fileElementRef = useRef()
    const [files,setFiles] = useState([])

    const updateFileList = useCallback(async () => {
        //Send request to function for the list of files
        try{
            const request = await fetch('https://vigocoding.com/getallfiles',{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    UUID : "aldanisvigo",
                    FILES : files
                })
            })
            const requestJson = await request.json()
            console.log(requestJson)
        }catch(err){
            console.error(err)
        }
    },[])

    useEffect(()=>{ //As soon as the page loads
        updateFileList() //Retrieve the list of already uploaded images
    },[updateFileList])
    

    const generateUploadPreview = (e) => {
        const files = fileElementRef.current.files
        setFiles(files)
        //Output list of files selected in the file upload component
        console.log(files)
    }

    const readFile = (file) => {
        return new Promise((resolve, reject) => {
            // Create file reader
            let reader = new FileReader()

            // Register event listeners
            reader.addEventListener("loadend", e => resolve(e.target.result))
            reader.addEventListener("error", reject)

            // Read file
            reader.readAsArrayBuffer(file)
        })
    }

    const getAsByteArray = async (file) => {
       return new Uint8Array(await readFile(file))
    }

    const uploadNewImage = async (e) => {
        //Log the list of files to upload
        const file = await fileElementRef.current.files[0]

        //Log the file
        console.log("Uploading the following files to TauByte storage")        
        const byteArray = await getAsByteArray(file)
        console.log(byteArray)

        var bodyData = new FormData()
        bodyData.append('file', byteArray)
        // bodyData.append('UUID', 'aldanisvigo')
        // bodyData.append('name', 'aldanisvigo')

        try{
            //Create a fetch post request to send the files to the dFunc
            const response = await fetch('https://vigocoding.com/uploadfile',{
                method : "POST",
                //Headers seem to be causing a problem, allow headers to be added by the browser
                headers : {
                    "Content-Type" : "multipart/form-data"
                },
                body : bodyData
            })

            console.log("Response")
            //Get the json from the response
            const json = await response.json()

            //Log the response to the console for now
            console.log("Response from TauByte:")
            console.log(json)

        }catch(err){ //If we encounter an error
            //Log the error to the console for debugging
            console.error(err)
        }
            
    }

    return <div>
        <h3>Upload a File to TauByte</h3>
        <div>
            <h3>Please select an image file: </h3>
            <input type="file" ref={fileElementRef} onChange={generateUploadPreview}/>
            <button onClick={uploadNewImage}>Upload Image</button>
        </div>
    </div>
}

export default FileUploadTest