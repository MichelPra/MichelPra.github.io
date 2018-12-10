import React from "react"
import Pad from '../components/Pad.jsx'
// import {sounds, MODE_NAMES} from '../data/sounds-constants.js'


const Drumpad = props => (
    
    <div id='drum-machine'>
        <div>{props.bank.map(d => (
          <Pad
            key={d.name}
            id={d.name}
            letter={d.shortcut}
            src={d.link}
            handleClick={props.handleClick}/>   
         ))}
        </div>
    </div>
)
export default Drumpad