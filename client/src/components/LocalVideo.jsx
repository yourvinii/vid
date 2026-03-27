import { forwardRef } from "react";

const LocalVideo = forwardRef((props, ref) => {
  return (
    <video
      ref={ref}
      autoPlay
      playsInline
      muted
      style={{
        width: "400px",
        border: "2px solid green",
      }}
    />
  );
});

export default LocalVideo;
