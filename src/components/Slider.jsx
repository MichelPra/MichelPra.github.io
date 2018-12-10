import React from "react"

const Slider = (props) => (
  <div className="slidecontainer">
    <input
      type="range"
      min="0"
      max="100"
      value={props.volume}
      className="slider"
      id="myRange"
      onInput={props.onSlide}
    />
  </div>
)
export default Slider