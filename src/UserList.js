import React from 'react';
import { User } from './User'

export const UserList = ({ users }) => {

	return (
		<div>
			{users.map(user => <User user={user} key={user.login} />)}
		</div>
	);
}
