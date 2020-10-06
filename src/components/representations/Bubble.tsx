import Plain from 'components/Plain';
import { StyledBubble } from 'components/Rates/style';
import React, { useState } from 'react';

const Bubble = ({ color }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button style={{
                width: '50px',
                height: '50px',
                borderRadius: '5px',
                backgroundColor: 'darkblue',
                color: 'white',
                textAlign: 'center',
                cursor: 'pointer',
                position: 'absolute',
                bottom: '5%',
                right: '5%',
                zIndex: 1000
            }} onClick={() => setIsOpen(!isOpen)}>Bubble</button>
            {isOpen && <StyledBubble><Plain color={color} /></StyledBubble>}
        </div >
    );
};

export default Bubble;

