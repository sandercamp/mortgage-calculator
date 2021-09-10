import React, { FC } from 'react';

const Text: FC<JSX.IntrinsicElements['input']> = ({ name, value, ...props }) => (
    <input
        type={ 'text' }
        name={ name }
        value={ value }
        { ...props }
    />
);

export default Text;
