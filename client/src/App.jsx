import { useEffect, useRef } from "react";
import LocalVideo from "./components/LocalVideo";
import RemoteVideo from "./components/RemoteVideo";

import { createPeerConnection } from "./webrtc/peerConnection.js";

export default function App() {
  const localRef = useRef(null);
  const remoteRef = useRef(null);

  const peerRef = useRef(null);

  if (!navigator.mediaDevices) {
    console.log("not supported");
  }

  useEffect(() => {
    startCamera();
  }, []);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    // if (stream && vidRef.current) {
    //   vidRef.current.srcObject = stream;
    // }

    localRef.current.srcObject = stream;
    createPeerConnection(stream);
  };

  function createConnection(stream) {
    peerRef.current = createPeerConnection();

    const peer = peerRef.current;

    console.log("Peer created");

    // add tracks
    stream.getTracks().forEach((track) => {
      peer.addTrack(track, stream);
    });

    //remote stream handler

    peer.ontrack = (event) => {
      console.log("Remote track received");
      remoteRef.current.srcObject = event.stream[0];
    };

    // ICE candidates debug

    peer.onicecandidate = (event) => {
      console.log("ICE candidate:");

      console.log(event.candidate);
    };

    // connection state

    peer.onconnectionstatechange = () => {
      console.log("State:");

      console.log(peer.connectionState);
    };
  }

  return (
    <div>
      <h1>Zoom</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <h3>Local Video</h3>
          <LocalVideo ref={localRef} />
        </div>

        <div>
          <h3>Remote Video</h3>

          <RemoteVideo ref={remoteRef} />
        </div>
      </div>
    </div>
  );
}
