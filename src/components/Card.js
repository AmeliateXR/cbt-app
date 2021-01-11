import React from "react";
import { string } from "prop-types";
import { animated, interpolate } from "react-spring/hooks";

const Card = ({ i, x, y, rot, scale, trans, bind, data }) => {
  const { name, text, pic } = data[i];

  function dismissCard() {
    console.log("Dismiss card: ")
  }

  function triggerCard() {
    console.log("Trigger card: ")
  }

  return (
    <animated.div key={i} style={{transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`)}}>
      <animated.div {...bind(i)} style={{transform: interpolate([rot, scale], trans)}}>
        <div className="card">
          <div className="header">
            <h7>Ameliate CBT</h7>
            <h8>Bias {i+1}</h8>
          </div>
          <hr></hr>
          <img alt="biasIcon" src={process.env.PUBLIC_URL + pic} />
          <h2>{name}</h2>
          <h5>{text}</h5>
          <button id="no" onclick={dismissCard}>
            No
          </button>
          <button id="yes" onclick={triggerCard}>
            Yes
          </button>
        </div>
      </animated.div>
    </animated.div>
  );
};

Card.propTypes = {
  name: string,
  text: string,
  pic: string
};

export default Card;
