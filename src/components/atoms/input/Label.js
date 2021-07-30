import React from 'react';

const Label = ({ field, value }) => (
    <label htmlFor={ field }>
        { value }
    </label>
);

export default Label;
