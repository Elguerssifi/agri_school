import { useState } from 'react';
import styles from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    try {
      const response = await fetch('http://213.130.144.203:8089/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer 123', 
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful', data); 

        localStorage.setItem('AdminToken', data.token);
        localStorage.setItem('AdminRole', data.roles[0]); 
        window.location.href = '/admin';
      } else {
        setError(data.message || 'Failed to log in');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className={styles.login_admin_container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.input_container}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.input_container}>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className={styles.error_message}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
