import React from "react"

class Pad extends React.Component {
    constructor(props) {
        super(props)
        this.handleKeyDown = this.handleKeyDown.bind(this);
        // this.playSound = this.playSound.bind(this);
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown(e){
        if (e.key === this.props.letter) {
          this.props.handleClick(this.props);
        }
      }
    render() {
        return(
          <button
            className='drum-pad'
            onClick={() => this.props.handleClick(this.props)}>
            {this.props.letter.toUpperCase()}
            <audio id={this.props.letter}
                className='clip'
                src={this.props.src}>
            </audio>
            </button>
     )  
        
    }


}
export default Pad



// const Pad = props => (
//     <button
//         className='drum-pad'
//         onClick={() => props.handleClick(props)}
//         onKeyDown={() => props.handleKeyDown(props)}
//         >
//         {props.letter}
//         <audio id={props.letter}
//             className='clip'
//             src={props.src}>
//         </audio>
//     </button>
// )
// export default Pad
/* ref={ref => this.audio = ref}> */