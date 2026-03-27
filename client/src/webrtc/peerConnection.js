export const createPeerConnection = () => {
  // Creates connection engine.
  const peerConnection = new RTCPeerConnection({
    iceServers: [
      {
        urls: "stun:stun.l.google.com:19302",
      },
    ],
  });
  return peerConnection;
};
