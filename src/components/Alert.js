import React from 'react';

export const Alert = ({ variant, title, children }) => (
    <div className="alert alert-info" role="alert">
        <h4 class="alert-heading">{title}</h4>
        {children}
    </div>
);