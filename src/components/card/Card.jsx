import BellyIcon from '../../assets/belly-icon.png';
import PropTypes from 'prop-types';
import './Card.css';

const ImagePlaceholder = () => (
  <div className='card__no-image'>
    <div className='line_1'></div>
    <div className='line_2'></div>
  </div>
);

export const Card = ({
  isSingleCard=false,
  isGallery=false,
  name,
  description,
  bounty,
  devil_fruit,
  avg_power,
  img,
}) => {
  const cardContainerGridClasses = `card__container ${isSingleCard ? 'singleCard' : ''}`;
  const cardContainerGalleryClasses = `card__container-gallery`;
  const cardConterinerClass = isGallery ? cardContainerGalleryClasses : cardContainerGridClasses

  return (
    <div className={cardConterinerClass}>
      {img ? (
        <img className='card__pirate-img' src={img} alt={name} />
      ) : (
        <ImagePlaceholder />
      )}
      <div className='card__content'>
        <h1>{name}</h1>
        <div className='card__bounty'>
          <img className='card__belly-img' src={BellyIcon} alt='Belly Icon' />
          <p>{bounty.toLocaleString()}-</p>
        </div>
        <p className='card__content-description'>{description}</p>
        <p>
          Devil Fruit: <strong>{devil_fruit}</strong>
        </p>
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
  img: PropTypes.string,
  isSingleCard: PropTypes.bool,
};
