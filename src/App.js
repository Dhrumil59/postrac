
// import './App.css';
// import React, {useReducer, useRef} from 'react';
// import * as tf from "@tensorflow/tfjs";
// import * as posenet  from '@tensorflow-models/posenet';
// import Webcam from 'react-webcam';
// import {drawKeypoints, drawSkeleton} from "./utilities"; 
// function App() {
//   const webcamRef = useRef(null);
//   const canvasRef = useRef(null); 
//   // posenet load 
//   const runPosenet = async()=>{
//       const net = await posenet.load(
//         {
//           inputResolution:{width:640 , height:480}, 
//           scale :0.5
//         });
//         // intervla 
//         setInterval (() => {
//           detect(net);
//         },100 );
      

//   }
//   const detect = async (net)=>{
//     if (typeof webcamRef.current!== "undefined"&&webcamRef.current!==null && webcamRef.current.video.readyState===4){
//       // get properties 
//       const video = webcamRef.current.video;
//       const videoWidth = webcamRef.current.video.videoWidth; 
//       const videoHeight = webcamRef.current.video.videoHeight; 

//       // videowidth 
//         webcamRef.current.video.width = videoWidth;
//         webcamRef.current.video.header= videoHeight;

//       // detect 
//       const pose = await net.estimateSinglePose(video);
//       console.log(pose);

//       drawCanvas = (pose,video,videoWidth,videoHeight, canvasRef);
//     }
//   };  
//   const drawCanvas = (pose,video,videoWidth,videoHeight, canvas) =>{
//     const ctx = canvas.current.getContext("2d");
//     canvas.current.width =videoWidth;
//     canvas.current.height=videoHeight;

//     drawKeypoints(pose["keypoints"],0.6,ctx);
//     drawSkeleton(pose["keypoints"],0.7,ctx);
//   };
//    runPosenet();
//   return (
//     <div className="App">

//       <header className="App-header">
//        <Webcam
//           ref = {webcamRef}
//            style = {
//                     {   
//                       position:"absolute",
//                       margin: "auto",
//                       marginRight: "auto", 
//                       left:0,right:0, 
//                       textAlign:'center',
//                       zIndex: 9,
//                       width: 640,
//                       height: 480,
                      
//                     }
                      
//         }/>
//         <canvas
//           ref = {canvasRef}
//            style = {
//                     {   
//                       position:"absolute",
//                       margin: "auto",
//                       marginRight: "auto", 
//                       left:0,right:0, 
//                       textAlign:'center',
//                       zIndex: 9,
//                       width: 640,
//                       height: 480,
                      
//                     }
                      
//         }/>
       
//       </header>
//     </div>
//   );
// }

// export default App;



// 1. Install dependencies DONE
// 2. Import dependencies DONE
// 3. Setup webcam and canvas DONE
// 4. Define references to those DONE
// 5. Load posenet DONE
// 6. Detect function DONE
// 7. Drawing utilities from tensorflow DONE
// 8. Draw functions DONE

// import React, { useRef } from "react";
// import "./App.css";
// import * as tf from "@tensorflow/tfjs-core";
// import * as posenet from "@tensorflow-models/posenet";
// import Webcam from "react-webcam";
// import { drawKeypoints, drawSkeleton } from "./utilities";
// import * as poseDetection from '@tensorflow-models/pose-detection';

// function App() {
//   const webcamRef = useRef(null);
//   const canvasRef = useRef(null);

//   //  Load posenet
//   const runPosenet = async () => {
//     const net = await posenet.load({
//       inputResolution: { width: 640, height: 480 },
//       scale: 0.4,
//     });
//     //
//     setInterval(() => {
//       detect(net);
//     }, 20);
//   };

//   const detect = async (net) => {
//     // Create a detector.
// // const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet);
// // const video = document.getElementById('video');
// // const poses = await detector.estimatePoses(video);
//     if (
//       typeof webcamRef.current !== "undefined" &&
//       webcamRef.current !== null &&
//       webcamRef.current.video.readyState === 4
//     ) {
//       // Get Video Properties
//       const video = webcamRef.current.video;
//       const videoWidth = webcamRef.current.video.videoWidth;
//       const videoHeight = webcamRef.current.video.videoHeight;

//       // Set video width
//       webcamRef.current.video.width = videoWidth;
//       webcamRef.current.video.height = videoHeight;

//       // Make Detections
//       const pose = await net.estimateSinglePose(video);
//       console.log(pose);

//       drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);
//     }
//   };

//   const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
//     const ctx = canvas.current.getContext("2d");
//     canvas.current.width = videoWidth;
//     canvas.current.height = videoHeight;

//     drawKeypoints(pose["keypoints"], 0.2, ctx);
//     drawSkeleton(pose["keypoints"], 0.2, ctx);
//   };

//   runPosenet();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Webcam
//           ref={webcamRef}
//           style={{
//             position: "absolute",
//             marginLeft: "auto",
//             marginRight: "auto",
//             left: 0,
//             right: 0,
//             textAlign: "center",
//             zindex: 9,
//             width: 640,
//             height: 480,
//           }}
//         />

//         <canvas
//           ref={canvasRef}
//           style={{
//             position: "absolute",
//             marginLeft: "auto",
//             marginRight: "auto",
//             left: 0,
//             right: 0,
//             textAlign: "center",
//             zindex: 9,
//             width: 640,
//             height: 480,
//           }}
//         />
//       </header>
//     </div>
//   );
// }

// export default App;









// gpt it 1

// import React, { useRef } from "react";
// import "./App.css";
// import * as posenet from "@tensorflow-models/posenet";
// import Webcam from "react-webcam";
// import { drawKeypoints, drawSkeleton } from "./utilities";

// function App() {
//   const webcamRef = useRef(null);
//   const canvasRef = useRef(null);

//   //  Load posenet
//   const runPosenet = async () => {
//     const net = await posenet.load({
//       inputResolution: { width: 640, height: 480 },
//       scale: 0.4,
//     });

//     const detect = async () => {
//       // Create a detector.
//       // const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet);
//       // const video = document.getElementById('video');
//       // const poses = await detector.estimatePoses(video);

//       if (
//         typeof webcamRef.current !== "undefined" &&
//         webcamRef.current !== null &&
//         webcamRef.current.video.readyState === 4
//       ) {
//         // Get Video Properties
//         const video = webcamRef.current.video;
//         const videoWidth = webcamRef.current.video.videoWidth;
//         const videoHeight = webcamRef.current.video.videoHeight;

//         // Set video width
//         webcamRef.current.video.width = videoWidth;
//         webcamRef.current.video.height = videoHeight;

//         // Make Detections
//         const pose = await net.estimateSinglePose(video);
//         console.log(pose);

//         drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);
//       }

//       requestAnimationFrame(detect);
//     };

//     detect();
//   };

//   const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
//     const ctx = canvas.current.getContext("2d");
//     canvas.current.width = videoWidth;
//     canvas.current.height = videoHeight;

//     drawKeypoints(pose["keypoints"], 0.3, ctx);
//     drawSkeleton(pose["keypoints"], 0.3, ctx);
//   };

//   runPosenet();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Webcam
//           ref={webcamRef}
//           style={{
//             position: "absolute",
//             marginLeft: "auto",
//             marginRight: "auto",
//             left: 0,
//             right: 0,
//             textAlign: "center",
//             zindex: 9,
//             width: 640,
//             height: 480,
//           }}
//         />

//         <canvas
//           ref={canvasRef}
//           style={{
//             position: "absolute",
//             marginLeft: "auto",
//             marginRight: "auto",
//             left: 0,
//             right: 0,
//             textAlign: "center",
//             zindex: 9,
//             width: 640,
//             height: 480,
//           }}
//         />
//       </header>
//     </div>
//   );
// }

// export default App;









import React, { useRef, useEffect } from "react";
import "./App.css";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { drawKeypoints, drawSkeleton } from "./utilities";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    async function runPosenet() {
      // Use WebGL backend
      await tf.setBackend("webgl");

      // Load posenet
      const net = await posenet.load({
        inputResolution: { width: 640, height: 480 },
        scale: 0.9,
      });

      // Start webcam
      const video = webcamRef.current.video;
      await video.play();

      // Run detection loop
      const detect = async () => {
        if (
          typeof webcamRef.current !== "undefined" &&
          webcamRef.current !== null &&
          webcamRef.current.video.readyState === 4
        ) {
          // Get video properties
          const video = webcamRef.current.video;
          const videoWidth = webcamRef.current.video.videoWidth;
          const videoHeight = webcamRef.current.video.videoHeight;

          // Set video width
          webcamRef.current.video.width = videoWidth;
          webcamRef.current.video.height = videoHeight;

          // Make detections
          const pose = await net.estimateSinglePose(video);
          console.log(pose);

          // Draw keypoints and skeleton on canvas
          const ctx = canvasRef.current.getContext("2d");
          canvasRef.current.width = videoWidth;
          canvasRef.current.height = videoHeight;
          drawKeypoints(pose["keypoints"], 0.4, ctx);
          drawSkeleton(pose["keypoints"], 0.4, ctx);
        }

        // Request next frame
        requestAnimationFrame(detect);
      };

      detect();
    }

    runPosenet();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480,
          }}
        />
      </header>
    </div>
  );
}

export default App;