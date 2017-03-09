import React from "react";
import bemClassName from "bem-classname";
import swal from "react-sweetalert";

class Register extends React.PureComponent {
  constructor () {
		super();
    this.classname = bemClassName.bind(null, 'Register')
  }

	onRegister() {
		const {register} = this.props;
		const loginValue = this.refs.login.value;

		const passwordFirst = this.refs.st.value;
		const passwordSecond = this.refs.passwordSecond.value;
		console.log("on register si running", passwordFirst, passwordSecond);
		swal("Good job!", "You clicked the button!", "success");
		if (loginValue === "" || passwordFirst === "" || passwordSecond === "") {
			console.log("different pass");
		}
		else if (passwordFirst !== passwordSecond) {
			console.log("one or more arguments not passed");
			this.refs.login.value = "foo!";
			//TODO: implement error message - lack of args
		} else {
			console.log("passwords are equal");
			register(loginValue, passwordFirst);
		}
	}

  render () {
    return (
			<div className={this.classname("registerBox")}>
			<span tabIndex="4" className={this.classname("registerAccountText")}>
				Register new account:
			</span>
				<div className={this.classname("inputBundle")}>
					<input
						className={this.classname("email")}
						placeholder="Login"
						tabIndex="1"
						required="required"
						ref="login"
						type='email'/>
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
					onClick={() => location.href = "/"}>
					<span>Abort</span>
				</button>
			</div>
    )
  }
}

export default Register
