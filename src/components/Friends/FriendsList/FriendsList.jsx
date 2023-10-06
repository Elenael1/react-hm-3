import React from 'react'
import { FriendsItem } from '../FriendsItem/FriendsItem'
import PropTypes from 'prop-types';

export const FriendsList = ({friends}) => {
  return (
    <ul>
        {friends.map(({id, name, isOnline, avatar}) =>{
            return <FriendsItem key={id} name={name} isOnline={isOnline} avatar={avatar}/>
        })}
    </ul>
  )
}


FriendsList.propTypes = {
  friends: PropTypes.array
};
