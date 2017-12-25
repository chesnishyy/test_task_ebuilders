import React, { Component } from 'react';

import style from './Register.scss';

export default class Register extends Component {
	constructor(props) {
		super(props);

		this.state ={
			user_name: '',
			password: '',
			valid: false
		};

		this.submitHandle = this.submitHandle.bind(this);
		this.userName = this.userName.bind(this);
		this.password = this.password.bind(this);
	}

	userName(event) {
		this.setState({
			user_name: event.target.value
		})
	}

	password(event) {
		this.setState({
			password: event.target.value
		})
	}

	get isUserNameValid() {
		const {user_name} = this.state;
		const min_length = user_name && user_name.length > 2;
		const max_length = user_name && user_name.length < 100;

		return min_length && max_length;
	}

	get isPasswordValid() {
		const {password} = this.state;
		const min_length = password && password.length > 6;
		const max_length = password && password.length < 255;

		return min_length && max_length;
	}


	submitHandle(event) {
		event.preventDefault();

		if (this.isPasswordValid && this.isUserNameValid) {
			console.log('done')
		}
		else {
			console.log('oooo oo')
		}
	}


	render() {
		return (
			<div className="d-flex justify-content-center align-items-center register-container">
				<div>
					<h1 className="display-4">Please, register!</h1>
					<form
						onSubmit={this.submitHandle}
					>
						<div className="form-group">
							<label htmlFor="userName">User name</label>
							<input
								type="text"
								className="form-control"
								id="userName"
								placeholder="Enter your user name"
								onChange={this.userName}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Password</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								placeholder="Password"
								onChange={this.password}
							/>
						</div>
						<button
							type="submit"
							className="btn btn-primary"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		);
	}
}
