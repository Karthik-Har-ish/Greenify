import React from 'react'
import Webcam from "react-webcam";


async function saveBase64AsFile(base64, filename) {
  const response = await fetch(base64);
  const blob = await response.blob();
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const WebcamCapture = () => (
  
  
  <Webcam
    audio={false}
    height={480}
    screenshotFormat="image/jpeg"
    width={720}
    videoConstraints={videoConstraints}
  >
    {({ getScreenshot }) => (
      <button
        onClick={() => {
          const imageSrc = getScreenshot()
          saveBase64AsFile(imageSrc, 'image.jpg')
          .then(() => {
            console.log('File saved successfully')
            imgTaken = true;
          })
          .catch((error) => {
            console.error('Error saving file:', error)
          })
          
        }}
      >
        Capture photo
      </button>
    )}
  </Webcam>
);

const Scan = () => {

  let imgTaken = false;
  return (
    <div>
      <h1>Scan your garbage here:</h1>

    <div className='camera-container'>
      {imgTaken ? <img src="image.jpg" alt="captured image" /> : <WebcamCapture />}
      
    </div>
    </div>
  )
}

export default Scan