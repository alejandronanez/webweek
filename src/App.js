import React, { Component } from 'react'
import 'tachyons/css/tachyons.min.css'

import { SearchForm } from './SearchForm'
import { Banner } from './Banner';
import { UserList } from './UserList';

const GITHUB_REPOS_URL = 'https://api.github.com/search/users?q=';

class App extends Component {
	state = {
		loading: false,
		results: [],
		totalResults: 0,
		error: ''
	}

	getRepos = username => {
		return fetch(`${GITHUB_REPOS_URL}${username}`).then(result => result.json());
	}

	handleSubmit = async value => {
		this.setState({
			loading: true,
			error: ''
		});

		try {
			const repos = await this.getRepos(value);

			this.setState({
				totalResults: repos.total_count,
				results: repos.items
			});

		} catch(e) {
			this.setState({
				totalResults: 0,
				results: [],
				error: 'something went wrong :('
			});
		} finally {
			this.setState({
				loading: false
			});
		}
	}

	render() {
		const {
			loading,
			results,
			error
		} = this.state;

		return (
			<div className="pa4 black-80">
				{
					!!error.length &&
					<Banner error={error}/>
				}
				{
					!loading &&
					<SearchForm onSubmit={this.handleSubmit} />
				}
				{
					loading &&
					<h1>Cargando...</h1>}
				{
					!!results.length &&
					!loading &&
					<UserList users={results} />
				}
			</div>
		);
	}
}

export default App;
