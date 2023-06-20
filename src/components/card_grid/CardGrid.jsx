import { Card } from '../card/Card';
import PropTypes from 'prop-types';

import './CardGrid.css';

export const CardGrid = ({ cards }) => {
  const isSingleCard = cards.length === 1;
  const gridContainerClass = isSingleCard ? 'cardgrid__container-oneitem' : 'cardgrid__container';
  return (
    <div className={gridContainerClass}>
      {cards.map((card) => (
        <Card key={card.name} isSingleCard={isSingleCard} {...card}/>
      ))}
    </div>
  );
};

CardGrid.propTypes = {
  cards: PropTypes.array.isRequired,
};
