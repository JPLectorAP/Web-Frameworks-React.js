import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const { login } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit : React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!name || !email) return alert("Please enter your name and email!");
    login(name, email);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
