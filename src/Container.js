import React, { useCallback, useState } from 'react';
import Card from './Card.js';
import { titles } from './dummyData.js';
import update from 'immutability-helper';
const style = {
  width: 400,
};
const Container = () => {
  {
    const [cards, setCards] = useState(JSON.parse(JSON.stringify(titles)));
    const [cardRender, setCardsRender] = useState(false);
    const moveCard = useCallback((dragIndex, hoverIndex) => {
      console.log(dragIndex, hoverIndex);
      setCardsRender(false);
      setCards((prevCards) => {
        const item = prevCards.splice(dragIndex, 1);
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        });
      });
      setCardsRender(true);
    }, []);
    const renderCard = useCallback((card, i) => {
      return (
        <Card
          key={card.id}
          id={card.id}
          index={i}
          text={card.text}
          moveCard={moveCard}
        />
      );
    }, []);
    return (
      <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
    );
  }
};

export default Container;
