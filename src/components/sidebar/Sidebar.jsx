import PropTypes from 'prop-types';

import './Sidebar.css';
import { forwardRef } from 'react';

export const Sidebar = forwardRef((props, ref) => {
  const { isOpened, handleShowSidebar, children } = props;

  return (
    <div className={`sidebar__container ${isOpened ? 'open' : ''}`} ref={ref}>
      <div className='sidebar__header'>
        <div
          className='sidebar__cross-icon'
          onClick={() => handleShowSidebar(false)}
        ></div>
      </div>
      <div className='sidebar__content'>{children}</div>
    </div>
  );
});

Sidebar.displayName = 'Sidebar';

Sidebar.propTypes = {
  isOpened: PropTypes.bool,
  handleShowSidebar: PropTypes.func,
};
