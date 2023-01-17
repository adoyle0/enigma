import React from 'react';
import Rotor from './Rotor.js';
import './Rotorbox.css';

class Rotorbox extends React.Component {
    render() {
        return (
            <div className='Rotorbox'>
            <Rotor pos={this.props.state.rotor0}/>
            <Rotor pos={this.props.state.rotor1}/>
            <Rotor pos={this.props.state.rotor2}/>
            <Rotor pos={this.props.state.rotor3}/>
            <Rotor pos={this.props.state.rotor4}/>
            </div>
        );
    }
}

export default Rotorbox;
