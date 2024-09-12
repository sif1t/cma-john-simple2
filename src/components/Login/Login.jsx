import React, { useContext } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
       const { signIn } = useContext(AuthContext);

       const handleLogin = event => {
              event.preventDefault();
              const form = event.target;
              const email = event.target.email.value;
              const password = event.target.password.value;
              console.log(email, password);

              signIn(email, password)
                     .then (result => {
                            const loggedUser = result.user;
                            console.log(loggedUser);
                            form.reset();
                     })

                     .catch(error => {
                            console.log(error);
                     })
       }

       return (
              <div className='form-container'>
                     <h2 className='form-title'> Login</h2>
                     <form onSubmit={handleLogin}>
                            <div className="form-control">
                                   <label htmlFor="email">Email</label>
                                   <input type="email" name='email' id="email" required />
                            </div>
                            <div className="form-control">
                                   <label htmlFor="password">Password</label>
                                   <input type="password" name='password' id="password" required />
                            </div>
                            <input className='btn-submit' type="submit" value="Login" />
                     </form>
                     <p><small>New to Ema-john? <Link to="/signup">Create new Account</Link></small></p>
              </div>
       );
};

export default Login; 