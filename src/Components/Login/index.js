import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./styles.css";

function LoginComponent() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const {
        register,
        setError,
        formState: { errors },
    } = useForm();

    // fetch
    const HandleSubmit = async (e) => {
        e.preventDefault();

        const infoUser = {
            email: email,
            password: password,
        };

        console.log(infoUser);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setError("emailUser", undefined);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setError("passwordUser", undefined);
    };

    return (
        <>
            <div id="login" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <h1 className="title">Login System</h1>
                <form onSubmit={HandleSubmit}>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input
                            {...register("emailUser")}
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                        ></input>
                        {errors.emailUser && (
                            <p className="msgError">
                                {errors.emailUser.message}
                            </p>
                        )}
                    </div>
                    <div className="field">
                        <label htmlFor="password">Password</label>
                        <div className="sub_field">
                            <input
                                {...register("passwordUser")}
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <span id="eyePassword" onClick={togglePassword}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        {errors.passwordUser && (
                            <p className="msgError">
                                {errors.passwordUser.message}
                            </p>
                        )}
                    </div>
                    <div className="actions">
                        <button
                            type="submit"
                            onClick={() => {
                                if (email === "") {
                                    [
                                        {
                                            name: "emailUser",
                                            message:
                                                "insert your email, please",
                                        },
                                    ].forEach(({ name, message }) =>
                                        setError(name, { message })
                                    );
                                }
                                if (password === "") {
                                    [
                                        {
                                            name: "passwordUser",
                                            message:
                                                "insert your password, please",
                                        },
                                    ].forEach(({ name, message }) =>
                                        setError(name, { message })
                                    );
                                }
                            }}
                        >
                            Login
                        </button>
                        <Link to="auth/register">
                            <button type="submit">Register</button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default LoginComponent;
