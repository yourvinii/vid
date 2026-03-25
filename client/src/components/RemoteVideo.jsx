import { useRef } from "react";

export default function RemoteVideo() {
  const remoteRef = useRef(null);

  return (
    <video ref={remoteRef} autoPlay playsInline style={{ width: "400px" }} />
  );
}
