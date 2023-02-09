import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

function RegisterComponent() {
    const [nome, setNome] = useState("");
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
            nome: nome,
            email: email,
            password: password,
        };

        console.log(infoUser);

        axios
            .post("http://localhost:3001/auth/register", {
                nome: nome,
                email: email,
                password: password,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleNomeChange = (e) => {
        setNome(e.target.value);
        setError("nomeUser", undefined);
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
                <h1 className="title">Register</h1>
                <form onSubmit={HandleSubmit}>
                    <div className="field">
                        <label htmlFor="nome">nome</label>
                        <input
                            {...register("nomeUser")}
                            type="text"
                            name="nome"
                            id="nome"
                            value={nome}
                            onChange={handleNomeChange}
                        ></input>
                        {errors.nomeUser && (
                            <p className="msgError">
                                {errors.nomeUser.message}
                            </p>
                        )}
                    </div>
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
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default RegisterComponent;
