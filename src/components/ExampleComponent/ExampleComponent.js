import React from 'react'
import styles from './ExampleComponent.module.css';
import icon from '../../assets/cart.svg';

const ExampleComponent = () => (
    <div className={styles.wrapper}>
        <h1>Beispiel React Component</h1>
        <img src={icon} style={{ width: "44px", height: "44px" }} />
    </div>
)

export default ExampleComponent;