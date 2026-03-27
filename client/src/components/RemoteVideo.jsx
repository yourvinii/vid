import { forwardRef } from "react";
//App.jsx controls stream.
// We pass ref downward.
// PeerConnection → remote stream → App.jsx → RemoteVideo.jsx
const RemoteVideo = forwardRef((props, ref) => {
  return (
    <video
      ref={ref}
      autoPlay
      playsInline
      style={{
        width: "400px",
        border: "2px solid blue",
      }}
    />
  );
});

export default RemoteVideo;
