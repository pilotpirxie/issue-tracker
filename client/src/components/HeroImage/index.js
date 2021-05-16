import React from 'react';
import heroIllustration from './images/undraw_finish_line_katerina_limpitsouni_xy20.svg';

const HeroImage = () => (
  <div className="col-12 col-lg-6">
    <div className="p-5">
      <img
        className="img-fluid"
        src={heroIllustration}
        alt="Issue Tracker"
      />
    </div>
  </div>
);

export default HeroImage;
