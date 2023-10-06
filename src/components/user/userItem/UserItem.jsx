import React from 'react'
import { UserStats } from '../userStats/UserStats';
import s from './userItem.module.css'

export const UserItem = ({username,tag, location, avatar, ...stats}) => {
  return (
    <div className={s.userItemContainer}>
      <img className={s.userItemImg} src={avatar} alt="" />
      <p>{username}</p>
      <p>{tag}</p>
      <p>{location}</p>
      <UserStats {...stats}/>
  </div>
  )
}

;