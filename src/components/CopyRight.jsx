import React from 'react'
import styles from './CopyRight.module.css'

const CopyRight = () => {
    return (
        <div className={`${styles.mainDiv}`}>
            <hr className='white_text'/>
            <div className='text-center'>
                <p className='white_text'>© Copyright 2024 . Made by <a href='#top'>Rishabh Jain</a></p>
            </div>
        </div>
    )
}

export default CopyRight
