import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png'
import './logo.css';

const Logo = () =>{
    return(
        <div className='ma4 mt0'>
            <Tilt className='Tilt br3 shadow-3' option={{max:55}} style={{height:150, width:150}}>
                <div className='Tilt-inner pa3'><img alt='logo' src={brain}></img> </div>
            </Tilt>
        </div>
    )
}

export default Logo;