import React from 'react'
import styles from "./Header.module.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
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
                        <a className="nav-link" aria-current="page" href="#">
                            <div className={`${styles.navLink}`}>About</div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <div className={`${styles.navLink}`}>Skills</div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <div className={`${styles.navLink}`}>Projects</div>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">
                            <div className={`${styles.navLink}`}>
                                <BsLinkedin />
                                Linkedin
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <div className={`${styles.navLink}`}>
                                <BsGithub />
                                Github
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <div className={`${styles.navLink} ${styles.contactLink}`}>
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
