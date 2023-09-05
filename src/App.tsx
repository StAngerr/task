import React, { useState} from 'react';
import './App.scss';
import {Description} from "./Description";

export const App = () => {
    const [isDescription, setIsDescription ] = useState(true)

    return (
        <div className="App">
           <div className={'tabs'}>
               <button onClick={() => setIsDescription(true)} className={isDescription ? 'active' : ''}>Description</button>
               <button onClick={() => setIsDescription(false)} className={!isDescription ? 'active' : ''}>Implementation</button>
           </div>

            <div className={'content'}>
                {isDescription ? <Description /> : <p>Your implementation with SVG goes here...</p>}
            </div>
        </div>
    );
}

export default App;
