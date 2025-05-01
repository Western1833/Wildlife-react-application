import { useContext } from "react";
import useForm from "../../../hooks/useForm.js";
import AuthContext from "../../../contexts/authContext.js";
import { Link } from "react-router-dom";

export default function Register() {
    const {registerSubmitHandler} = useContext(AuthContext);

    const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
        email: '',
        password: '',
        passwordConfirm: ''
    });

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

                <input className="btn submit" type="submit" value="Register" />

                <p className="field">
                    <span>If you already have profile click <Link to="/login">here</Link></span>
                </p>
            </div>
        </form>
    </section>
    );
}