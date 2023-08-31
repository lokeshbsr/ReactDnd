import React, { useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd-cjs';
import ItemTypes from './ItemTypes.js';
import { Typography } from 'antd';
const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
};
const Card = ({ id, text, index, moveCard }) => {
  // console.log(id, index);
  const [isDraggingg, setIsDragging] = useState(false);
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: 'card',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex !== hoverIndex) {
        console.log(item);
        moveCard(dragIndex, hoverIndex);
        item.index = hoverIndex;
      } else {
        setIsDragging(true);
      }
    },
    drop: () => {
      console.log('dropped');
      
    },
  });
  const [{isDragging}, drag] = useDrag({
    // type: 'card',
    item: { id, index, type: 'card' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      if (!monitor.didDrop()) {
        console.log('drag ended ...');
        
      }
    },
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div ref={ref} style={{ ...style, opacity }} data-handler-id={handlerId}>
      <Typography.Text>{text}</Typography.Text>
    </div>
  );
};

export default Card;
