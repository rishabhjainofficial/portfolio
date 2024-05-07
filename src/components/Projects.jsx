import React from 'react'
import styles from "./Projects.module.css";

const Projects = () => {
    return (
        <div className={`${styles.mainDiv}`}>
            <div className={`${styles.innerDiv}`}>
                <div className={`${styles.headingDiv}`}>
                    <div className={`d-flex`}>
                        <p className={`${styles.heading} green_text`}>projects</p>
                        <p className={`${styles.heading} white_text`}>( )</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
