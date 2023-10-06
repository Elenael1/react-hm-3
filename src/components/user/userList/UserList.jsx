import React from 'react'
import { UserItem } from '../userItem/UserItem'
import PropTypes from 'prop-types';
import { isUuid } from 'uuidv4';

export const UserList = ({users}) => {
  return (
    <div>
      {users.map(({username,tag, location, avatar, ...stats}) => {
        return <UserItem key={isUuid} username={username} tag={tag} location={location} avatar={avatar} {...stats}/>
      })}
        
    </div>
  )
}

UserList.propTypes = {
    users: PropTypes.array
  };