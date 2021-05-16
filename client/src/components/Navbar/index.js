import React from 'react';
import PropTypes from 'prop-types';

const CustomNavbar = ({ onClickCreate }) => (
  <div>
    <div className="navbar navbar-light bg-light">
      <a
        className="navbar-brand"
        href="/"
      >
        Issue Tracker
      </a>
      <div className="float-right">
        <div
          className="btn btn-primary"
          onClick={() => onClickCreate()}
          onKeyDown={() => onClickCreate()}
          tabIndex={-1}
          role="button"
        >
          Create
        </div>
      </div>
    </div>
  </div>
);

CustomNavbar.propTypes = {
  onClickCreate: PropTypes.func.isRequired,
};

export default CustomNavbar;
