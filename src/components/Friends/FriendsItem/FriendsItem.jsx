import React from 'react'
import s from './friendsItem.module.css'
import { FriendStatus } from '../FriendsStatus/FriendStatus'

export const FriendsItem = ({name, isOnline, avatar}) => {
  return (
    <li className={s.friendsItem}>
     
      <FriendStatus isOnline={isOnline}> 
      <img  className={s.friendsImg} src={avatar} alt="" />
      <p className={s.name} >{name}</p>
      </FriendStatus>

    </li>
  )
}
