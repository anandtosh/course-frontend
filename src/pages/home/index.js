import React, { useState } from 'react';
import useWebSocketClient from '../../hooks/useWebsocketClient';
import ContextMenu from '../../components/common/ContextMenu';

const Home = () => {
  const {sendMessage,message} = useWebSocketClient()
  const [text,setText] = useState('')
  return (
    <div className='p-5'>
      <h2>Home Page</h2>
      {/* Add content specific to the home page */}
      <input className='border p-3' onChange={(e) => setText(e.target.value)}/>
      <button onClick={() => sendMessage(text)} >send message</button>
      <p className='mt-3'>
        {message}
      </p>
      <ContextMenu />
    </div>
  );
};

export default Home;
