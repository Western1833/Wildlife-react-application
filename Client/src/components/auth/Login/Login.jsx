/*eslint-disable */
import { Link } from "react-router-dom";
import useForm from "../../../hooks/useForm.js";
import { useContext } from 'react';
import AuthContext from "../../../contexts/authContext.js";

export default function Login({error}) {
    const {loginSubmitHandler} = useContext(AuthContext);

    const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
        email: '',
        password: ''
    });

    return(
        <section id="login-page" className="auth">
        <form id="login" onSubmit={onSubmit}>

            <div className="container">
                <div className="brand-logo"></div>
                <h1>Login</h1>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" onChange={onChange} value={values.email} />

                <label htmlFor="login-password">Password:</label>
                <input type="password" id="login-password" name="password" onChange={onChange} value={values.password} />
                {error && <p style={{color: 'red'}}>{JSON.parse(error)}</p>}
                <input type="submit" className="btn submit" value="Login" />
                <p className="field">
                    <span>If you don&apos;t have profile click <Link to="/register">here</Link></span>
                </p>
            </div>
        </form>
    </section>
    );
}