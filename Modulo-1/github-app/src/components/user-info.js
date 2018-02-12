'use strict'

import React, { PropTypes } from 'react'

const UserInfo = ({ userinfo }) => (
  <div className='container columns'>
    <div className='column is-half'>
      <h1 className='title'>
        <a href={`https://github.com/${userinfo.login}`}>
          {userinfo.username}
        </a>
      </h1>
      <figure className='image is-128x128'>
        <img src={userinfo.photo} />
      </figure>
    </div>
    <div className='column is-half'>
      <div className='tile is-ancestor'>
        <div className='tile is-parent'>
          <article className='tile is-child notification is-primary'>
            <p className='title'>Repositórios</p>
            <p className='subtitle is-centered'>{userinfo.repos}</p>
          </article>
        </div>
        <div className='tile is-parent'>
          <article className='tile is-child notification is-warning'>
            <p className='title'>Seguidores</p>
            <p className='subtitle'>{userinfo.followers}</p>
          </article>
        </div>
        <div className='tile is-parent'>
          <article className='tile is-child notification is-danger'>
            <p className='title'>Seguindo</p>
            <p className='subtitle'>{userinfo.following}</p>
          </article>
        </div>
      </div>
    </div>
  </div>

)

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export default UserInfo
