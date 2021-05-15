import React from 'react';

const CustomNavbar = (props) => (
  <div>
    <div className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">Issue Tracker</a>
      <div className="float-right">
        <div className="btn btn-primary">Create</div>
      </div>
    </div>
  </div>
);

export default CustomNavbar;
