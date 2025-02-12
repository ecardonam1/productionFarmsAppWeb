'use client';

import styles from './login.module.css';
import { login } from '../../services/authService';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
     // await login(email, password);
      router.push('dashboard'); 
    } catch (error) {
      setErrorMessage('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
    }
  };
  

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1>Administre de forma eficiente sus fincas</h1><br/>
        <form onSubmit={handleSubmit}> 
          <div className={styles.inputGroup}>
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <div className={styles.error}>{errorMessage}</div>}
          <button type="submit" className={styles.loginButton}>Iniciar sesión</button>
        </form>
        <p className={styles.registerPrompt}>
          ¿No tienes cuenta?{' '}
          <button className={styles.registerButton} onClick={() => router.push('register')} >
            Regístrate aquí
          </button>
        </p>
      </div>
    </div>
  );
}
