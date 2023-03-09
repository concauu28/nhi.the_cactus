import React from "react";
import "./animation.css";
function Animation() {
  return (
    <div className="container">
      <div className="cactoevaso1">
        <div className="cacto1">
          <div className="planta1">
            <div className="olho p1o1"></div>
            <div className="olho p1o2"></div>
            <div className="boca"></div>
            <div className="planta1-espinho1"></div>
            <div className="planta1-espinho2"></div>
            <div className="planta1-espinho3"></div>
          </div>
        </div>
        <div className="vaso1">
          <div className="topo"></div>
          <div className="base"></div>
          <div className="base-border"></div>
        </div>
      </div>

      <div className="cactoevaso2">
        <div className="cacto2">
          <div className="planta2">
            <div className="olho p2o1"></div>
            <div className="olho p2o2"></div>
            <div className="planta2-espinho1"></div>
            <div className="planta2-espinho2"></div>
            <div className="planta2-espinho3"></div>
          </div>
        </div>
        <div className="vaso2">
          <div className="topo"></div>
          <div className="base"></div>
          <div className="base-border"></div>
        </div>
      </div>

      <div className="bolha">
        <div className="bolha-sombra"></div>
      </div>

      <div className="mainsplash">
        <div className="splash splash1"></div>
        <div className="splash splash-m1"></div>

        <div className="splash splash2"></div>
        <div className="splash splash-m2"></div>

        <div className="splash splash3"></div>
        <div className="splash splash-m3"></div>

        <div className="splash splash4"></div>
        <div className="splash splash-m4"></div>
      </div>

      <div className="chao"></div>
    </div>
  );
}

export default Animation;
