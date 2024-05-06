import React from 'react'
import styles from "./GreetingSection.module.css";

const GreetingSection = () => {
    return (
        <div className={`${styles.greetingDiv} row`}>
            <div className={`${styles.greetingLeftDiv} col-md-6`}>
                <div className={`text_color ${styles.greetingText}`}>
                    Hello, i am
                </div>
                <div className={`${styles.greenText}`}>
                    &#60; Rishabh
                </div>
                <div className={`${styles.greenText}`}>
                    Jain /&#62;
                </div>
                <div className={`text_color ${styles.positionText}`}>
                    Fullstack Developer
                </div>
                <div className={`${styles.experienceDiv}`}>
                    <div className={`${styles.yearsOfExperienceDiv}`}>
                        <div className={`${styles.experienceNo}`}>5</div>
                        <div>
                            <div className={`${styles.experienceText}`}>YEARS OF</div>
                            <div className={`${styles.experienceText}`}>EXPERIENCE</div>
                        </div>
                    </div>
                    <div className={`${styles.yearsOfExperienceDiv}`}>
                        <div className={`${styles.experienceNo}`}>20</div>
                        <div>
                            <div className={`${styles.experienceText}`}>PROJECTS COMPLETED</div>
                            <div className={`${styles.experienceText}`}>AROUND THE WORLD</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.greetingRightDiv}`}></div>
        </div>
    )
}

export default GreetingSection
