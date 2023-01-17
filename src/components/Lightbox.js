import { Component } from 'react';
import './Lightbox.css';

class Lightbox extends Component{
    bulb(i) {
        return (
            <span className='Bulb'>
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
            <div className='Lightbox'>
            {this.row('QWERTZUIO')}
            {this.row('ASDFGHJK')}
            {this.row('PYXCVBNML')}
            </div>
        );
    }
}

export default Lightbox;
