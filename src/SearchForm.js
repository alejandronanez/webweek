import React, { Component } from 'react';

export class SearchForm extends Component {
	state = {
		username: ''
	};

	handleInputChange = event => {
		this.setState({
			username: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();

		this.props.onSubmit(this.state.username);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit} className="measure center">
				<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					<legend className="f4 fw6 ph0 mh0">Search Repos</legend>
					<div className="mt3">
						<label
							className="db fw6 lh-copy f6"
							htmlFor="user-name"
						>
							Username
						</label>
						<input
							className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
							type="text"
							name="user-name"
							id="user-name"
							onChange={this.handleInputChange}
						/>
					</div>
				</fieldset>
				<div className="">
					<input
						className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
						type="submit"
						value="Search users!!!"
					/>
				</div>
			</form>
		);
	}
}
