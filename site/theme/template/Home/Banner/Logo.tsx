import * as React from 'react';
import './Logo.less';
import EvvDesign from '../../../static/EvvDesign.svg';

export default function Logo() {
  return (
    <div className="home-card-logo">
      <img
        width="500"
        height="87"
        alt="EZ Design"
        src={EvvDesign}
        className="home-banner-normal"
      />
    </div>
  );
}
