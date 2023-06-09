import { Card } from '../card/Card';
import PropTypes from 'prop-types';

import './CardGrid.css'

export const CardGrid = ({ cards }) => {
  return (
    <div className='cardgrid__container'>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

CardGrid.propTypes = {
  cards: PropTypes.object.isRequired,
};
