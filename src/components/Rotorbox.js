import React from 'react';
import Rotor from './Rotor.js';
import './Rotorbox.css';
import clicksound from '../media/mixkit-hard-click-1118.wav';

class Rotorbox extends React.Component {
    constructor() {
        super();
        this.state = {
            rotor0: 11,
            rotor1: 8,
            rotor2: 6,
            rotor3: 11,
            rotor4: 23
        };
    }
    tick() {
        const audio = new Audio(clicksound);
        audio.loop = false;
        audio.playbackRate = 3.0;
        audio.play();
        this.setState(state => ({
            rotor4: state.rotor4 +1
        }));
        if (this.state.rotor4 === 25) {
            this.setState(state => ({
                rotor3: state.rotor3 +1,
                rotor4: 0
            }));
        }
        if (this.state.rotor3 === 25) {
            this.setState(state => ({
                rotor2: state.rotor2 +1,
                rotor3: 0
            }));
        }
        if (this.state.rotor2 === 25) {
            this.setState(state => ({
                rotor1: state.rotor1 +1,
                rotor2: 0
            }));
        }
        if (this.state.rotor1 === 25) {
            this.setState(state => ({
                rotor0: state.rotor0 +1,
                rotor1: 0
            }));
        }
    }
    render() {
        return (
            <div className='Rotorbox' onClick={() => this.tick()}>
            <Rotor pos={this.state.rotor0}/>
            <Rotor pos={this.state.rotor1}/>
            <Rotor pos={this.state.rotor2}/>
            <Rotor pos={this.state.rotor3}/>
            <Rotor pos={this.state.rotor4}/>
            </div>
        );
    }
}

export default Rotorbox;
