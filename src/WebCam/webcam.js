import React from "react";
import Webcam from "react-webcam";
import { connect } from "react-redux";
import { savePhotos } from "./redux/actions";

const videoConstraints = {
  width: 800,
  height: 480,
  facingMode: "user",
};

const WebcamCapture = (props) => {
  const { imageArray } = props;
  const webcamRef = React.useRef(null);

  let imageCapturedArray = [];
  const capture = () => {
    const imgSrc = webcamRef.current.getScreenshot();
    imageCapturedArray.push({ imgSrc });
  };

  const startInterval = setInterval(capture, 3000)
  const stopInterval = ()=>{
    clearInterval(startInterval);
  }
  return (
    <>
      <Webcam
        audio={false}
        height={480}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button onClick={() =>startInterval }>Start Capture</button>
      <button onClick={() => savePhotos(imageCapturedArray)}>
        Save Photos
      </button>
      <button onClick={() => console.log("image", imageArray)}>
        Show Photos Array
      </button>
      <button onClick={() => stopInterval()}>
        Stop
      </button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    imageArray: state.webReducer.imageArray,
  };
};

const mapDispatchToProps = {
    savePhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(WebcamCapture);
