import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <div className='video-player'>
      <h1>Video Player</h1>
      <VideoPlayer />
    </div>
  );
}

export default App;
