import React from "react"


const Switch = (props) => (
    
        <label className="switch">
            <input 
            type="checkbox"
            onChange={props.onSwitch}
            />
            <span
            className="sliderSwitch"
            id={props.id}></span>
        </label>
        
    
)

export default Switch