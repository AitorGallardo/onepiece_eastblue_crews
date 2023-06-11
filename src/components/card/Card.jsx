import BellyIcon from '../../assets/Bellysymbol.webp';
import PropTypes from 'prop-types';
import './Card.css';

export const Card = ({
  name,
  description,
  bounty,
  devil_fruit,
  avg_power,
  img,
}) => {
  return (
    <div className='card__container'>
      {img ? (
        <img className='card__pirate-img' src={img} alt='pirate_image' />
      ) : (
        <div className='card__no-image'>
          <div className='line_1'></div>
          <div className='line_2'></div>
        </div>
      )}
      <div className='card__content'>
        <h1>{name}</h1>
        <div className='card__bounty'>
          <img className='card__belly-img' src={BellyIcon} alt='belly_money' />
          <p>{bounty.toLocaleString()}-</p>
        </div>
        <p>{description}</p>
        <p>{devil_fruit}</p>
        <p>
          Power: <strong>{avg_power}</strong>
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bounty: PropTypes.number.isRequired,
  devil_fruit: PropTypes.string.isRequired,
  avg_power: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};
