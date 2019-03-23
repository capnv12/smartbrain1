import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({onInputChange, onSubmit}) =>{
    return(
        <div className=''>
            <p className="f3">{"This Magic Brain Will Detect Faces In Your Pictures"}</p>
            <div className='center'>
                <div className="pa4 br3 shadow-5 form center">
                    <input className='f4 pa2 2-70 center' type='text' onChange={onInputChange}></input>
                    <button onClick={onSubmit} className='2-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;