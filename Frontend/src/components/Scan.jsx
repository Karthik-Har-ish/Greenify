import React, { useEffect, useState } from 'react'
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import * as tmImage from "@teachablemachine/image"




async function saveBase64AsFile(base64) {
  const response = await fetch(base64);
  const blob = await response.blob();
  const img = await URL.createObjectURL(blob);
  console.log(img)
  return (<img src={img} alt="garbage image"></img>);
}
async function init(){
  const URL = "https://teachablemachine.withgoogle.com/models/ZP3W6suLr/"
  console.log(tmImage)
  const model = await tmImage.load(URL+"model.json",URL+"metadata.json")
  
  console.log(model)

  return model
}



const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const WebcamCapture = (props) => (
  
  <Webcam
    audio={false}
    height={480}
    screenshotFormat="image/jpeg"
    width={720}
    videoConstraints={videoConstraints}
  >
    {({ getScreenshot }) => (
      <button
        onClick={async () => {
          const imageSrc = getScreenshot()  
          const imgEl = await saveBase64AsFile(imageSrc)
          props.setImage(imgEl)
        }}
      >
        Capture photo
      </button>
    )}
  </Webcam>
);

const Scan = () => {

  
  let [image,setImage] = React.useState(null)

  const model = init()
  .then(()=>console.log("model loaded"))




  let imgTaken = false;
  return (
    <div>
      <h1>Scan your garbage here:</h1>

    <div className='camera-container'>
      <WebcamCapture setImage={setImage} />
      
    </div>

    <div className="waste-type">
      
    </div>
    {}
    </div>
  )
}

export default Scan