import {useState, useEffect} from 'react';
import styles from './Story.module.css';

function Story({title, data, text}){

    return (
        <div className={styles.story}>
            <div>
                <h2>{title}</h2>
                <p>{data}</p>
                <p>{text}</p>
           </div>
        </div>
    )
    
}

export default Story
