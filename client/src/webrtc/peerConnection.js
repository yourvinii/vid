export const createPeerConnection = () => {
  const peerConnection = new RTCPeerConnection({
    iceServers: [
      {
        urls: "stun:stun.1.google.com:19302",
      },
    ],
  });
  return peerConnection;
};
