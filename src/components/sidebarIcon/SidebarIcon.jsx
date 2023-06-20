import PropTypes from 'prop-types';

import './SidebarIcon.css';
import { forwardRef } from 'react';

export const SidebarIcon = forwardRef((props, ref) => {
  const { handleShowSidebar } = props;
  return (
    <div
      ref={ref}
      className='app__filter-section_sidebar-icon'
      onClick={() => handleShowSidebar(true)}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
});

SidebarIcon.displayName = 'SidebarIcon';

SidebarIcon.propTypes = {
  isOpened: PropTypes.bool,
  handleShowSidebar: PropTypes.func,
};
