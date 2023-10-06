import React from 'react'

export const UserStats = ({stats}) => {
  return (
    <>
        <p>Followers: {stats.followers}</p>
        <p>Likes: {stats.likes}</p>
        <p>Views: {stats.views}</p>
    </>
  )
}
