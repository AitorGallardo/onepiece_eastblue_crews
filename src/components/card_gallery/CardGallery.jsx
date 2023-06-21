import PropTypes from 'prop-types';

import './CardGallery.css'
import { Card } from '../card/Card';

export const CardGallery = ({members}) => {
  const isSingleCard = members.length === 1;

  return (
    <div className="cardGallery__container">
        {
            members.map((member)=>(<Card key={member.name} isSingleCard={isSingleCard} {...member}/>))
        }
    </div>
  )
}

CardGallery.propTypes = {
    members: PropTypes.array.isRequired,
  };
