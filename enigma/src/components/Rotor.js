import React from 'react';
import './Rotor.css';

class Rotor extends React.Component {
    constructor(props) {
        super(props)
    }
    letter(i) {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if (i > 25) {
            return alphabet[i - 26]
        }
        else if (i < 0) {
            return alphabet[26 + i]
        }
        else {
            return alphabet[i]
        }
    }
    tick() {
        if (this.state.pos === 25) {
            this.setState((state) => ({pos: 0}));
        }
        else {
            this.setState((state) => ({pos: state.pos + 1}));
        }
    }
    render() {
        return (
            <span className='Rotor'>
            <div>{this.letter(this.props.pos + 1)}</div>
            <div>{this.letter(this.props.pos)}</div>
            <div>{this.letter(this.props.pos - 1)}</div>
            </span>
        );
    }
}

export default Rotor