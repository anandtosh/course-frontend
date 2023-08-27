import React, { useEffect, useState } from 'react';
import { useAdminStore, useAuthStore } from '../stores';

export default function useWebSocketClient() {
  const [message, setMessage] = useState(null);
  const [socket, setSocket] = useState(null);
  const { token } = useAuthStore()
  const { token:adminToken } = useAdminStore()

  useEffect(() => {
    const params = adminToken ? {'x-admin-secret': adminToken}: {'token': token}

    const socketUrl = new URL(process.env.REACT_APP_WEB_SOCKET_URL);
    Object.keys(params).forEach(key => socketUrl.searchParams.append(key, params[key]));

    const newSocket = new WebSocket(socketUrl);

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
