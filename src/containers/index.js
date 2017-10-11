/* @flow */
import React from 'react';

const App = () => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            position: 'absolute',
        }}
    >
        <img
            alt="GOAT"
            width="500"
            src="http://junkee.com/wp-content/uploads/2017/02/drake.jpg"
            style={{
                border: '10px solid rgb(233, 66, 122)',
            }}
        />
    </div>
);

export default App;
