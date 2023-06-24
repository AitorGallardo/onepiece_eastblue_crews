import PropTypes from 'prop-types';

import './IconStyles.css';


const styles = {
  color: '#000000',
  fontStyle: 'normal',
  fontVariant: 'normal',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontSize: 'medium',
  lineHeight: 'normal',
  fontFamily: 'sans-serif',
  textIndent: '0',
  textAlign: 'start',
  textDecoration: 'none',
  textDecorationLine: 'none',
  textDecorationStyle: 'solid',
  textDecorationColor: '#000000',
  letterSpacing: 'normal',
  wordSpacing: 'normal',
  textTransform: 'none',
  direction: 'ltr',
  blockProgression: 'tb',
  writingMode: 'lr-tb',
  baselineShift: 'baseline',
  textAnchor: 'start',
  whiteSpace: 'normal',
  clipRule: 'nonzero',
  display: 'inline',
  overflow: 'visible',
  visibility: 'visible',
  opacity: '1',
  isolation: 'auto',
  mixBlendMode: 'normal',
  colorInterpolation: 'sRGB',
  colorInterpolationFilters: 'linearRGB',
  solidColor: '#000000',
  stroke: 'none',
  strokeWidth: '25',
  strokeLinecap: 'butt',
  strokeLinejoin: 'miter',
  strokeMiterlimit: '4',
  strokeDasharray: 'none',
  strokeDashoffset: '0',
  strokeOpacity: '1',
  colorRendering: 'auto',
  imageRendering: 'auto',
  shapeRendering: 'auto',
  textRendering: 'auto',
  enableBackground: 'accumulate',
};
export const GridIcon = ({displayMode}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='400'
      height='400'
      viewBox='0 0 400 400.00001'
      version='1.1'
      className='icon grid-icon fill-icon'
      onClick={()=>displayMode()}
    >
      <defs id='defs4' />
      <sodipodi:namedview
        id='base'
        pagecolor='#ffffff'
        bordercolor='#666666'
        borderopacity='1.0'
        inkscape:pageopacity='0.0'
        inkscape:pageshadow='2'
        inkscape:zoom='1.4'
        inkscape:cx='145.62304'
        inkscape:cy='161.99989'
        inkscape:document-units='px'
        inkscape:current-layer='layer1'
        showgrid='false'
        units='px'
        showguides='true'
        inkscape:guide-bbox='true'
        inkscape:window-width='1920'
        inkscape:window-height='1056'
        inkscape:window-x='1920'
        inkscape:window-y='24'
        inkscape:window-maximized='1'
      >
        <sodipodi:guide
          position='200.71429,121.42857'
          orientation='1,0'
          id='guide23298'
        />
      </sodipodi:namedview>
      <metadata id='metadata7'>
        <rdf:RDF>
          <cc:Work rdf:about=''>
            <dc:format>image/svg+xml</dc:format>
            <dc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage' />
            <dc:title />
          </cc:Work>
        </rdf:RDF>
      </metadata>
      <g id='layer1' transform='translate(0,-652.36216)'>
        <path
          style={styles}
          d='m 0,0 0,188.57227 188.57227,0 0,-188.57227 z m 211.42773,0 0,188.57227 188.57227,0 L 400,0 Z M 25,25 l 138.57227,0 0,138.57227 -138.57227,0 z M 236.42773,25 375,25 l 0,138.57227 -138.57227,0 z M 0,211.42969 0,400 l 188.57227,0 0,-188.57031 z m 211.42773,0 0,188.57031 L 400,400 400,211.42969 Z m -186.42773,25 138.57227,0 0,138.57031 L 25,375 Z m 211.42773,0 138.57227,0 L 375,375 236.42773,375 Z'
          transform='translate(0,652.36216)'
          id='rect7332'
        />
      </g>
    </svg>
  );
};

GridIcon.propTypes = {
  displayMode: PropTypes.func,
};

