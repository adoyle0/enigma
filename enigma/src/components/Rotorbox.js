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
            rotor3: 12,
            rotor4: 0
        };
    }
    tick() {
        const audio = new Audio(clicksound);
        audio.loop = false;
        audio.playbackRate = 3.0;
        audio.play();
        if (this.state.rotor4 > 24) {
            this.setState(state => ({
                rotor3: state.rotor3 +1,
                rotor4: 0
            }));
        }
        if (this.state.rotor3 > 24) {
            this.setState(state => ({
                rotor2: state.rotor2 +1,
                rotor3: 0
            }));
        }
        if (this.state.rotor2 > 24) {
            this.setState(state => ({
                rotor1: state.rotor1 +1,
                rotor2: 0
            }));
        }
        if (this.state.rotor1 > 24) {
            this.setState(state => ({
                rotor0: state.rotor0 +1,
                rotor1: 0
            }));
        }
        else {
            this.setState(state => ({
                rotor4: state.rotor4 +1
            }));
        }
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            200
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    lulz() {
        let balls = {
            rotor0: 2,
            rotor1: 0,
            rotor2: 11,
            rotor3: 11,
            rotor4: 25
        }
        if (this.state !== balls) {
        }

    }
    render() {
        return (
            <div className='Rotorbox'>
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
