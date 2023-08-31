import React from 'react';
import './style.css';
import { DndProvider } from 'react-dnd-cjs';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Container from './Container.js';

export default function App() {
  return (
    <div>
      <p>React Dnd with latest react, antd versions</p>
      <DndProvider backend={HTML5Backend}>
        <Container />
      </DndProvider>
    </div>
  );
}
