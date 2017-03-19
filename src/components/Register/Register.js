import React from "react";
import bemClassName from "bem-classname";
import 'sweetalert/dist/sweetalert.css';

class Register extends React.PureComponent {
    constructor() {
        super();
        this.classname = bemClassName.bind(null, 'Register');
    }

    onRegister() {
        const {onRegisterAction} = this.props;
        const loginValue = this.refs.login.value;
        const passwordFirst = this.refs.passwordFirst.value;
        const passwordSecond = this.refs.passwordSecond.value;
				const nameValue = this.refs.name.value;
				const lastNameValue = this.refs.lastName.value;
				const avatar = this.refs.avatar.value;

        if (this.validatePassword(loginValue, nameValue, lastNameValue, passwordFirst, passwordSecond)) {
            onRegisterAction(loginValue, nameValue, lastNameValue, passwordFirst, avatar);
        }
    }

    validatePassword(loginValue, nameValue, lastNameValue, passwordFirst, passwordSecond) {
        if (loginValue === "" || nameValue === "" || lastNameValue === "" ||  passwordFirst === "" || passwordSecond === "") {
            const message = "Please provide required values:"
							+ (loginValue === "" ? "\n- login" : "")
							+ (nameValue === "" ? "\n- name" : "")
							+ (lastNameValue === "" ? "\n- last name" : "")
							+ (passwordFirst === "" ? "\n- first password" : "")
							+ (passwordSecond === "" ? "\n- second password" : "");
            swal({title: message, type: "warning", timer: 3000});
        }
        else if (passwordFirst !== passwordSecond) {
            swal({title: "Passwords are different.", type: "warning", timer: 2000});
        } else {
            return true;
        }
    }

    onAbort() {
        const {onAbortAction} = this.props;
        onAbortAction()
    }

    render() {
        return (
            <div className={this.classname("registerBox")}>
						<span tabIndex="4" className={this.classname("registerAccountText")}>
								Register new account:
						</span>
								<div className={this.classname("inputBundle")}>
										<input
												className={this.classname("login")}
												placeholder="Login"
												tabIndex="1"
												required="required"
												ref="login"
												type='text'/>
										<input
												className={this.classname("name")}
												placeholder="Name"
												tabIndex="1"
												required="required"
												ref="name"
												type='text'/>
										<input
												className={this.classname("lastName")}
												placeholder="Last Name"
												tabIndex="1"
												required="required"
												ref="lastName"
												type='text'/>
										<input
												className={this.classname("password")}
												tabIndex="2"
												placeholder="Password"
												required="required"
												ref="passwordFirst"
												type='password'/>
										<input
												className={this.classname("repeatPassword")}
												tabIndex="2"
												placeholder="Repeat password"
												required="required"
												ref="passwordSecond"
												type='password'/>
										<input
											className={this.classname("avatar")}
											tabIndex="2"
											placeholder="Paste here link to your avatar"
											required="required"
											ref="avatar"
											type='text'/>
                </div>
                <button
                    className={this.classname("registerButton")}
                    tabIndex="3"
                    onClick={::this.onRegister}>
                    <span>Register</span>
                </button>

                <button
                    className={this.classname("abortButton")}
                    tabIndex="3"
                    onClick={::this.onAbort}>
                    <span>Abort</span>
                </button>
            </div>
        )
    }
}

export default Register
