import React from 'react'

import './Button.css';

export const Button = ({ cta, primary = false, onClickAction }) => {
    const styles = primary ? 'btn btn-primary' : 'btn btn-secondary';

    return (
        <button className={styles} onClick={onClickAction}>{cta}</button>
    )
}