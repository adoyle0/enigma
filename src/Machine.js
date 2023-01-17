import { Component } from 'react';
import './Machine.css';
import Rotorbox from './components/Rotorbox.js';
import Lightbox from './components/Lightbox.js';
import Keyboard from './components/Keyboard.js';

class Machine extends Component {
    render() {
        return (
            <div className='Machine'>
            <Rotorbox/>
            <hr/>
            <Lightbox/>
            <hr/>
            <Keyboard/>
            </div>
        );
    }
}

export default Machine;
