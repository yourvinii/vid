import { useRef } from "react";
export default function LocalVideo({ stream }) {
  const localRef = useRef(null);
  if (stream && localRef.current) {
    localRef.current.srcObject = stream;
  }

  return;
  <video ref={localRef} autoPlay playsInline style={{ width: "400px" }} />;
}
