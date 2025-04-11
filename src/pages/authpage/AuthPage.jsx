import './AuthPage.css';
import Image from '../../components/Image/Image';
import { useState } from 'react';
const AuthPage = () => {
  const [register, setRegister] = useState(false);
  const [error, setError] = useState('');

  return (
    <div className="auth-page">
      <div className="auth-container">
        <Image w={36} h={36} path={'/general/logo.png'} alt="" />
        <h1>{register ? 'Create an Account' : 'Login to your account'} </h1>
        {register ? (
          // REGISTER
          <form key={'registerform'}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" placeholder="Username" required name="username" id="username" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Name" required name="name" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Email" required name="email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Password" required name="password" id="password" />
            </div>
            <button type="submit">Register</button>
            <p onClick={() => setRegister(false)}>
              Do you have an account? <b>Login</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        ) : (
          // LOGIN
          <form key={'loginform'}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Email" required name="email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="password" required name="password" id="password" />
            </div>
            <button type="submit">Login</button>
            <p onClick={() => setRegister(true)}>
              Don&apos;t have an account <b>Register</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};
export default AuthPage;
