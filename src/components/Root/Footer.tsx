import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import LoginForm from './LoginForm';
import styles from './Footer.module.css';

const Footer = () => {

    const { user, logout } = useContext(UserContext);

    return (
        <footer className={styles.footer}>
            {user ? (
                <div className={styles.user}>
                    <img src={user.avatar} alt={user.name} width="40px" />
                    <span>Welcome, {user.name}!</span>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <LoginForm />
            )}
        </footer>
    )
}

export default Footer;