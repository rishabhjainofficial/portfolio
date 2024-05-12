import React from 'react'
import styles from "./Header.module.css";
import { BsLinkedin, BsGithub, BsGitlab } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";

const Header = () => {
    return (
        <div className={`${styles.mainDiv}`}>
            <div className={`${styles.nameDiv}`}>
                <p style={{ color: "#828282" }}>RISHABH</p><p style={{ color: "#F2F2F2" }}>JAIN</p>
            </div>
            <div className={`${styles.navDiv}`}>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#about">
                            <div className={`${styles.navLink}`}>About</div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skills">
                            <div className={`${styles.navLink}`}>Skills</div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">
                            <div className={`${styles.navLink}`}>Projects</div>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="https://www.linkedin.com/in/rishabh-jain-a88176167/" target="_blank" rel="noreferrer">
                            <div className={`${styles.navLink}`}>
                                <BsLinkedin />
                                Linkedin
                            </div>
                        </a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="https://gitlab.com/rishabhwebanix" target="_blank" rel='noreferrer'>
                            <div className={`${styles.navLink}`}>
                                <BsGitlab />
                                Gitlab
                            </div>
                        </a>
                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/rishabhjainofficial" target="_blank" rel='noreferrer'>
                            <div className={`${styles.navLink}`}>
                                <BsGithub />
                                Github
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact-us">
                            <div className={`${styles.navLink}`}>
                                <BiMailSend className={`${styles.icons}`} />
                                Contact me
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
