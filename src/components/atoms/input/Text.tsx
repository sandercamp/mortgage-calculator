import React, { FC } from 'react';

interface InputProps {
    name: string;
    value: string;
    [x:string]: any;
}

const Text: FC<InputProps> = ({ name, value, ...rest }) => (
    <input
        type={ 'text' }
        name={ name }
        value={ value }
        { ...rest }
    />
);

export default Text;
