import React, { useState } from "react";
import Webcam from "react-webcam";
import * as tmImage from "@teachablemachine/image";

async function saveBase64AsFile(base64) {
  const response = await fetch(base64);
  const blob = await response.blob();
  return blob;
}

async function init() {
  const URL = "https://teachablemachine.withgoogle.com/models/ZP3W6suLr/";
  const model = await tmImage.load(URL + "model.json", URL + "metadata.json");
  return model;
}

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebcamCapture = ({ setImage, handleCapture }) => (
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
          const imageSrc = getScreenshot();
          const imgBlob = await saveBase64AsFile(imageSrc);
          const imageUrl = URL.createObjectURL(imgBlob); // Create object URL
          setImage(imageUrl); // Set the image URL for display
          handleCapture(imgBlob); // Call handleCapture with the blob
        }}
      >
        Capture photo
      </button>
    )}
  </Webcam>
);

const Scan = () => {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleCapture = async (imageBlob) => {
    const model = await init(); // Load the model
    const imgElement = document.createElement("img");
    imgElement.src = URL.createObjectURL(imageBlob);

    // Wait for the image to load
    await new Promise((resolve) => {
      imgElement.onload = resolve;
    });

    // Make predictions
    const prediction = await model.predict(imgElement);
    console.log(prediction);
    setPrediction(prediction);
    console.log(maxProbability(prediction))
  };

  
  const maxProbability = (prediction) => {
    let maxProbability = {className:"",probability:0}
    for(let i=0;i<prediction.length;i++){
      if (prediction[i].probability>maxProbability.probability){
        maxProbability=prediction[i]
      }
    }
    return(maxProbability)
  }

  return (
    <div>
      <h1 className="header">Scan your garbage here:</h1>
      <div className="camera-container">
        <WebcamCapture setImage={setImage} handleCapture={handleCapture} />
      </div>
      <div className="prediction">
        {image && <img src={image} alt="captured" />} {/* Use image directly */}
        {prediction && (
          <h1>{maxProbability(prediction).className}</h1>
        )}
      </div>
    </div>
  );
};

export default Scan;