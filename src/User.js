import React from 'react';

export const User = ({ user }) => {
	return (
		<article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
			<div className="tc">
				<img
					alt="user from github"
					src={user.avatar_url}
					className="br-100 h3 w3 dib"
					title={user.login}
				/>
				<h1 className="f4">
					{user.login}
				</h1>
				<hr className="mw3 bb bw1 b--black-10" />
			</div>
			<a
				href={user.html_url}
				className="lh-copy measure center f6 black-70"
				target="_blank"
				rel="noopener noreferrer"
			>
				{user.html_url}
			</a>
		</article>
	);
}
