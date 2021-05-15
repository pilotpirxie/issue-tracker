import React from 'react';

const Layout = ({ children }) => (
  <div className="container mt-3">
    <div className="row">
      <div className="col">
        {children}
      </div>
    </div>
  </div>
);

export default Layout;
