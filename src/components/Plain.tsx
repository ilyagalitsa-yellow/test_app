import React from 'react';
import { StyledContainer } from './Rates/style';

const Plain = ({ color, height = '100%', width = '100%' }) => {
    return (
        <div>
                <h1 style={{ color: color, justifySelf: 'center' }}>Hello World</h1>
                <input style={{ width, height }} />
        </div>
    );
};

export default Plain;