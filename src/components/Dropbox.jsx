import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

const dropzoneStyle = {
    width: '100%',
    height: 150,
    lineHeight: '150px',
    borderWidth: 2,
    borderColor: 'rgb(102, 102, 102)',
    borderStyle: 'dashed',
    borderRadius: 5,
    textAlign: 'center',
}

const FileDropzone = ({ handleFileDrop }) => {
    const onDrop = useCallback(handleFileDrop, [])
    
    const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({onDrop})

    return (
        <div {...getRootProps()} style={dropzoneStyle}>
            <input {...getInputProps()} />
            {
                acceptedFiles.length > 0
                ? <p>Ready! Click the 'Predict!' button!</p> 
                : isDragActive ? <p>Drop the files here ...</p> 
                : <p>Drag 'n' drop your image here, or click to select files</p>
            }
        </div>
    )
}

export default FileDropzone;