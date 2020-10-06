import React from 'react';

const NewWindow = () => {
    return (
        <div>
            <button style={{
                width: '50px',
                height: '50px',
                borderRadius: '5px',
                backgroundColor: 'yellow',
                color: 'white',
                textAlign: 'center',
            }} onClick={() => {
                window.open("https://test-chat-6b12f.web.app/", "chat", "width=200,height=200,resizable=yes,scrollbars=yes");
            }}>Open</button>

        </div >
    );
};

export default NewWindow;