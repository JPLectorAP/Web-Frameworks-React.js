import Central_Perk from "../../assets/Central_Perk.svg";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className={styles.header}>
        <img src={Central_Perk} alt="Logo Central Perk" height={"120px"}/>
        <nav>
            <ul className={styles.navItems}>
                <NavLink to="/" className={({isActive}) => isActive ? styles.isActive : styles.navItem}>Home</NavLink>
                <NavLink to="/conversation/1" className={({isActive}) => isActive ? styles.isActive : styles.navItem} >S1E1</NavLink>
                <NavLink to="/conversation/2" className={({isActive}) => isActive ? styles.isActive : styles.navItem} >S1E2</NavLink>
                <NavLink to="/conversation/3" className={({isActive}) => isActive ? styles.isActive : styles.navItem} >S1E3</NavLink>
            </ul>
        </nav>
    </header>
  );
};

export default Navbar;
