import { Component } from 'react';
import './Keyboard.css';

class Keyboard extends Component{
    bulb(i) {
        return (
            <span className='Key'>
            {i}
            </span>
        );}
    row(letters) {
        const buffer = [];
        for (const i of letters) {
            buffer.push(
                this.bulb(i)
            )}
        return (
            <div className='row'>
            {buffer}
            </div>
        );
    }
    render() {
        return (
            <div className='Keyboard'>
            {this.row('QWERTZUIO')}
            {this.row('ASDFGHJK')}
            {this.row('PYXCVBNML')}
            </div>
        );
    }
}

export default Keyboard;
