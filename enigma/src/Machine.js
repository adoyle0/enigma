import { Component } from 'react';
import './Machine.css';
import Rotorbox from './components/Rotorbox.js';

function Lightbox() {
    return (
        <div>
        <div>&nbsp;Q W E R T Z U I O</div>
        <div>&nbsp;&nbsp;A S D F G H J K</div>
        <div>&nbsp;P Y X C V B N M L</div>
        </div>
    );
}

class Keyboard extends Component{
    render() {
        return (
            <div>
            <div>&nbsp;Q W E R T Z U I O</div>
            <div>&nbsp;&nbsp;A S D F G H J K</div>
            <div>&nbsp;P Y X C V B N M L</div>
            </div>
        );
    }
}

class Machine extends Component {
    render() {
        return (
            <div className='machine'>
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
