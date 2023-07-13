import React, { useEffect, useState } from 'react';

export default function useWebSocketClient() {
  const [message, setMessage] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => {
        const message = event.data;
        setMessage(message);
      };
    }
  }, [socket]);

  const sendMessage = (message) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(message);
    }
  };

  return { message, sendMessage };
}