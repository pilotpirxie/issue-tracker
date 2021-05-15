import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div className="container mt-3">
    <div className="row">
      <div className="col">
        {children}
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
