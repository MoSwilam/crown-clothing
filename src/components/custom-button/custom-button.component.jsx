import * as React from 'react';

import './custom-buttom.styles.scss';


export const CustomButton = ({ children, ...otherProps }) => (
    <button
        className={'custom-button'}
        {...otherProps}
    >
        {children}
    </button>
);
