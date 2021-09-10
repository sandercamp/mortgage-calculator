import React, { FC } from 'react';

type LabelProps = {
    fieldName: string
    value: string
}

const Label: FC<LabelProps & JSX.IntrinsicElements['label']> = ({ fieldName, value }) => (
    <label htmlFor={ fieldName }>
        { value }
    </label>
);

export default Label;
