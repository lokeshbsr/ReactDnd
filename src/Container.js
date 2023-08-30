import React, { useCallback, useState } from 'react';
import Card from './Card.js';
import { titles } from './dummyData.js';
const style = {
  width: 400,
};
const Container = () => {
  {
    const [cards, setCards] = useState(titles);
    const moveCard = useCallback((dragIndex, hoverIndex) => {
      console.log(dragIndex, hoverIndex);
      setCards((prevCards) => {
        const item = prevCards.splice(dragIndex, 1);
        prevCards.splice(hoverIndex, 0, item[0]);
        console.log(prevCards);
        return prevCards;
      });
    }, []);
    const renderCard = useCallback((card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      );
    }, []);
    return (
      <>
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    );
  }
};

export default Container;
