import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";

import Toolbar from "../Toolbar/Toolbar";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: 50px 0;
  justify-content: space-evenly;
`;

const StyledVideo = styled.video`
  height: 300px;
  width: 400px;
  margin-bottom: 1em;
  object-fit: cover;
  border-radius: 20px;
`;

const Video = props => {
  const ref = useRef();

  useEffect(() => {
    props.peer.on("stream", stream => {
      ref.current.srcObject = stream;
    });
  }, [props]);

  return <StyledVideo playsInline autoPlay ref={ref} />;
};

const videoConstraints = {
  height: window.innerHeight / 2,
  width: window.innerWidth / 2,
};

const Room = props => {
  const [peers, setPeers] = useState([]);
  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef([]);

  const roomID = props.match.params.roomID;

  useEffect(() => {
    socketRef.current = io.connect(
      "https://video-chat-capstone-api.herokuapp.com"
      // {
      //   withCredentials: true,
      //   extraHeaders: {
      //     "my-custom-header": "abcd",
      //   },
      // }
    );

    navigator.mediaDevices
      .getUserMedia({ video: videoConstraints, audio: true })
      .then(stream => {
        userVideo.current.srcObject = stream;

        socketRef.current.emit("join room", roomID);

        //*TELL ME IF THE ROOM IS FULL
        socketRef.current.on("room full", payload => {
          socketRef.current.emit(payload);
          console.log("room is full!");
        });

        socketRef.current.on("all users", users => {
          const peers = [];
          users.forEach(userID => {
            const peer = createPeer(userID, socketRef.current.id, stream);
            peersRef.current.push({
              peerID: userID,
              peer,
            });
            peers.push({
              peerID: userID,
              peer,
            });
          });
          console.log(peersRef);
          setPeers(peers);
        });

        socketRef.current.on("user joined", payload => {
          const peer = addPeer(payload.signal, payload.callerID, stream);
          peersRef.current.push({
            peerID: payload.callerID,
            peer,
          });

          const peerObj = {
            peer,
            peerID: payload.callerID,
          };

          setPeers(users => [...users, peerObj]);
        });

        socketRef.current.on("user-disconnected", userId => {
          console.log(userId);
        });

        socketRef.current.on("receiving returned signal", payload => {
          console.log(peersRef);
          const item = peersRef.current.find(p => p.peerID === payload.id);
          item.peer.signal(payload.signal);
        });

        socketRef.current.on("user left", id => {
          const peerObj = peersRef.current.find(p => p.peerID === id);
          if (peerObj) {
            peerObj.peer.destroy();
          }
          const peers = peersRef.current.filter(p => p.peerID !== id);
          peersRef.current = peers;
          setPeers(peers);
        });
      });
  }, [roomID]);

  const createPeer = (userToSignal, callerID, stream) => {
    console.log(userToSignal, callerID);
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on("signal", signal => {
      socketRef.current.emit("sending signal", {
        userToSignal,
        callerID,
        signal,
      });
    });

    return peer;
  };

  const addPeer = (incomingSignal, callerID, stream) => {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on("signal", signal => {
      socketRef.current.emit("returning signal", { signal, callerID });
    });

    peer.signal(incomingSignal);

    return peer;
  };

  // const muteUnmute = (e, track, stream, peer) => {
  //   console.log("mute");
  //   peer.removeTrack(track, stream);
  // };

  // const stopStartVideo = () => {};

  return (
    <Container>
      <StyledVideo muted ref={userVideo} autoPlay playsInline />

      {peers.map((peer, index) => {
        return <Video key={index} peer={peer.peer} />;
      })}
      <Toolbar
      //  muteUnmute={muteUnmute}
      //   stopStartVideo={stopStartVideo}
      />
    </Container>
  );
};

export default Room;
