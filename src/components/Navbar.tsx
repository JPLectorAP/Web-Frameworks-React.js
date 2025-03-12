import LoginForm from "./LoginForm";
import Central_Perk from "../assets/Central_Perk.svg";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <nav className={styles.header}>
        <img src={Central_Perk} alt="Logo Central Perk" height={"120px"}/>
        {user ? (
            <div className={styles.user}>
                <img src={user.avatar} alt={user.name} width="40px" />
                <span>Welcome, {user.name}!</span>
                <button onClick={logout}>Logout</button>
            </div>
        ) : (
            <LoginForm />
        )}
    </nav>
  );
};

export default Navbar;
