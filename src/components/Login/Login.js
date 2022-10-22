import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css';

const Login = () => {
    const {loginUser} = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value

        loginUser(email, password)
            .then ( result =>{
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch( error =>{
                console.log('error: ', error);
            })
    }

    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <h4 className='link-signup'>New to Ema-john? <span className='link-color'><Link to='/signup'>Create New Account</Link></span></h4>
        </div>
    );
};

export default Login;