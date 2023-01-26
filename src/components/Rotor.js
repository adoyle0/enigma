import React from 'react';
import './Rotor.css';

class Rotor extends React.Component {
    letter(pos) {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if (pos > 25) {
            return alphabet[pos - 26]
        }
        else if (pos < 0) {
            return alphabet[26 + pos]
        }
        else {
            return alphabet[pos]
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
