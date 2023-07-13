import React from 'react'
import Scrollbars from 'react-custom-scrollbars-2'

const Scrollbar = ({ children }) => {
    return (
        <Scrollbars
            autoHide={true}
            style={{ height: '100%' }}
            renderThumbVertical={({ style }) => (
                <div
                    style={{ ...style, backgroundColor: '#999999', borderRadius: '8px' }}
                />
            )}
            // renderTrackVertical={({ style }) => (
            //     <div style={{ ...style, backgroundColor: '#cbd5e0' }} />
            // )}
        >
            {children}
        </Scrollbars>
    )
}

export default Scrollbar