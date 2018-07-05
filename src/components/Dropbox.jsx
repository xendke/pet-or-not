import React from 'react';
import Dropzone from 'react-dropzone';


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

const Jumbo = ({ handleFileDrop }) => (
    <Dropzone style={dropzoneStyle} accept="image/*" onDrop={handleFileDrop}>
        {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
            if (isDragActive) {
                return "Drop here!";
            }
            if (acceptedFiles.length > 0) {
                return "Ready!";
            }
            if (rejectedFiles.length > 0) {
                return "Try a different file.";
            }
            
            return "Choose or drop file here!";
        }}
    </Dropzone>
);
export default Jumbo;