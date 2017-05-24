import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User'

export const UserList = ({ users }) => {
	return (
		<div>
			{users.map(user => <User user={user} key={user.login} />)}
		</div>
	);
}

UserList.propTypes = {
	users: PropTypes.arrayOf(PropTypes.object)
};
