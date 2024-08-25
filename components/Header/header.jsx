
import styles from "./style.module.css";
import burgerBtn from "../../assets/hamburger-menu.svg";
import {useState} from "react";

const navBar = (
    <nav>
        <ul>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
        </ul>
    </nav>
);

const Header = () => {
    const [isShowOverlay, setShowOverlay] = useState(false);
    return (
    <>
    <header className={styles.header}> <h1>AUTOMOBILE</h1>
    {navBar}
    <button onClick={() => {
       setShowOverlay(!isShowOverlay);
    }}>
    
        <img src={burgerBtn.src} alt="menu button" />
    </button>
    </header>
    <div className={`${styles.overlay} ${isShowOverlay && styles.showOverlay}`}>
     {navBar}
    </div>
    </>
    );
};

export default Header;