import React, { Component } from "react"
import "./App.css"
import {sounds} from './data/sounds-constants.js'
import Display from "./components/Display"
import Switch from "./components/Switches"
import Slider from "./components/Slider"
import Drumpad from "./components/Drumpad"

class App extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      power: false,
      bank:"Smooth piano kit",
      display: "Pulsa cualquier tecla",
      volume: 30
    };
    this.handleOnSlide = this.handleOnSlide.bind(this)
    this.handleSwitchPower = this.handleSwitchPower.bind(this)
    this.handleSwitchBank = this.handleSwitchBank.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(props) {
    if(this.state.power === true){
    this.setState({
      display: props.id
    })
    this.playSound(props.letter)}
  }
  playSound(id){
    const sound = document.getElementById(id);
    sound.currentTime = 0;
    sound.volume = this.state.volume/100;
    sound.play();
  }
  handleSwitchPower(event) {
    this.setState({
      power: event.target.checked,
      display: event.target.checked ? "On" : "Off"
    })
  }
  handleSwitchBank(event) {
    if(this.state.power === true) {
    this.setState({
      bank: event.target.checked ? "Heater kit": "Smooth piano kit",
      display: event.target.checked ? "Heater kit": "Smooth piano kit"
    })}
  }
  handleOnSlide(event) {
    this.setState({
      volume:event.target.value,
      display:event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <Display display={this.state.display} />
        <div className="Switches">
          <Switch
            id="switchPower"
            name="power"
            onSwitch={this.handleSwitchPower}/>
          <Switch
            id="switchBank"
            name="bank"
            onSwitch={this.handleSwitchBank}/>
        </div>
        <Slider
        value={this.state.volume}
        onSlide={this.handleOnSlide} />
        <Drumpad 
          bank={this.state.bank === "Heater kit"? sounds["Heater kit"]: sounds["Smooth piano kit"]}
          handleClick={this.handleClick}/>
      </div>
    );
  }
}
export default App;
