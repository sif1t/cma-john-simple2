import React, { useContext } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
       const [show, setShow] = React.useState(false);
       const { signIn } = useContext(AuthContext);
       const navigate = useNavigate();
       const location = useLocation(); 
       console.log(location);

       const form = location.state?.from?.pathname || '/';

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
                            navigate(from, {replace: true});
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
                                   <input type={show ? "text": "password"} name='password' id="password" required />
                                   <p onClick={() => setShow(!show)}>
                                    <small>
                                        {
                                          show ? <span>Hide Password</span>: <span>Show Password</span>
                                        }
                                    </small>
                                   </p>
                            </div>
                            <input className='btn-submit' type="submit" value="Login" />
                     </form>
                     <p><small>New to Ema-john? <Link to="/signup">Create new Account</Link></small></p>
              </div>
       );
};

export default Login; 