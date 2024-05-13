import React from 'react';

function Tags({ children, tagTitle, backgroundColor }) {
    return (
        <div className="container-sm outer-tag d-flex align-items-center justify-content-center">
            <div className="tag-icon mr-3 d-flex align-items-center justify-content-center" style={{ backgroundColor }}>
                {children}
            </div>
            <h6 className="title-font mb-0 ms-2">{tagTitle}</h6>
        </div>
    );
}

export default Tags;
