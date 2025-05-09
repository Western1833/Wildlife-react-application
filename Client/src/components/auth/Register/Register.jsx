/*eslint-disable */
import { useContext } from "react";
import useForm from "../../../hooks/useForm.js";
import AuthContext from "../../../contexts/authContext.js";
import { Link } from "react-router-dom";

export default function Register({error}) {
    const {registerSubmitHandler} = useContext(AuthContext);

    const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
        email: '',
        password: '',
        passwordConfirm: ''
    });

    error = error.split(': ')[2];

    if(error.includes('required')) error = 'Email is required!';
    if(error.includes('match')) error = 'Passwords do not match!';
    if(error.includes('shorter')) error = 'Password should be at least 4 characters!';
    if(error.includes('provide')) error = 'Please provide a password!';
    if(error.includes('Please confirm your password.')) error = 'Please confirm your password!';
    if(error.includes('validation')) error = 'Email is not valid!';

    return(
        <section id="register-page" className="content auth">
        <form id="register" onSubmit={onSubmit}>
            <div className="container">
                <div className="brand-logo"></div>
                <h1>Register</h1>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="maria@email.com" onChange={onChange} value={values.email} />

                <label htmlFor="register-password">Password:</label>
                <input type="password" name="password" id="register-password" onChange={onChange} value={values.password} />

                <label htmlFor="confirm-password">Confirm Password:</label>
                <input type="password" name="passwordConfirm" id="confirm-password" onChange={onChange} value={values.passwordConfirm} />
                {error && <p style={{color: 'red'}}>{error}</p>}
                <input className="btn submit" type="submit" value="Register" />

                <p className="field">
                    <span>If you already have profile click <Link to="/login">here</Link></span>
                </p>
            </div>
        </form>
    </section>
    );
}