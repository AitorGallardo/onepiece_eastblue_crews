import PropTypes from 'prop-types';


import './IconStyles.css'

const styles = {
  textIndent: '0',
  textAlign: 'start',
  lineHeight: 'normal',
  textTransform: 'none',
  blockProgression: 'tb',
  inkscapeFontSpecification: 'Bitstream Vera Sans'
};
export const GalleryIcon = ({displayMode}) => {
  return (
    <svg
      fill='#000000'
      width='800px'
      height='800px'
      // strokeWidth={1.5}
      // stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className='icon fill-icon'
      onClick={()=>displayMode()}
    >
      <path
        style={styles}
        d='M 8 4 C 7.4777778 4 6.9395305 4.1854695 6.5625 4.5625 C 6.1854695 4.9395305 6 5.4777778 6 6 L 6 7 L 8 7 L 8 6 L 20 6 L 20 13 L 19 13 L 19 15 L 20 15 C 20.522222 15 21.060469 14.814531 21.4375 14.4375 C 21.814531 14.060469 22 13.522222 22 13 L 22 6 C 22 5.4777778 21.814531 4.9395305 21.4375 4.5625 C 21.060469 4.1854695 20.522222 4 20 4 L 8 4 z M 4 8 C 3.4777778 8 2.9395305 8.1854695 2.5625 8.5625 C 2.1854695 8.9395305 2 9.4777778 2 10 L 2 18 C 2 18.522222 2.1854695 19.060469 2.5625 19.4375 C 2.9395305 19.814531 3.4777778 20 4 20 L 16 20 C 16.522222 20 17.060469 19.814531 17.4375 19.4375 C 17.814531 19.060469 18 18.522222 18 18 L 18 10 C 18 9.4777778 17.814531 8.9395305 17.4375 8.5625 C 17.060469 8.1854695 16.522222 8 16 8 L 4 8 z M 4 10 L 16 10 L 16 18 L 4 18 L 4 10 z'
        overflow='visible'
      ></path>
    </svg>
  );
};

GalleryIcon.propTypes = {
  displayMode: PropTypes.func,
};

