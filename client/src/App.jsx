import { useRef } from "react";

export default function App() {
  const videoRef = useRef(null);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    videoRef.current.srcObject = stream;
    console.log(navigator);
  };

  return (
    <div>
      <h1>Zoom Clone Day 1</h1>

      <video ref={videoRef} autoPlay playsInline style={{ width: "500px" }} />

      <button onClick={startCamera}>Start Camera</button>
    </div>
  );
}
