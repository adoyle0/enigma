import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

class Rotor extends React.Component {
    constructor() {
        super()
    }
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    state = {
        pos: 0,
        current: this.alphabet[0]
    }
    tick(me) {
        if (this.state.pos === 26) {
            // roll next rotor
            this.setState({
                pos: 0,
                current: this.alphabet[0]
            });
        }
        else {
            this.setState({
                current: this.alphabet[this.state.pos++]
            });
        }
    }
    render() {
        return (
            <span className='rotor' onClick={(me) => this.tick(me)}>
            <div className='rotorwheel'>{this.state.current}|</div>
            </span>
        );
    }
}

class Rotorbox extends React.Component {
    render() {
        return (
            <div className='rotorbox'>
            <Rotor/>
            </div>
        );
    }
}

function Lightbox() {
    return (
        <div>
        <div>&nbsp;Q W E R T Y U I O P</div>
        <div>&nbsp;&nbsp;A S D F G H J K L</div>
        <div>&nbsp;&nbsp; Z X C V B N M</div>
        </div>
    );
}

function Keyboard() {
    return (
        <div>
        <div>&nbsp;Q W E R T Y U I O P</div>
        <div>&nbsp;&nbsp;A S D F G H J K L</div>
        <div>&nbsp;&nbsp; Z X C V B N M</div>
        </div>
    );
}

class App extends React.Component {
    render() {
        return (
            <div className='machine'>
            <Rotorbox />
            <hr/>
            <Lightbox />
            <hr/>
            <Keyboard />
            </div>
        );
    }
}

export default App;
