import React from 'react';
import DraggableBlocks from './DraggableBlocks';

function Hero() {
  return (
    <div id="home" style={{ height: '100vh', overflow: 'hidden' }}>
      <DraggableBlocks />
    </div>
  );
}

export default Hero;

