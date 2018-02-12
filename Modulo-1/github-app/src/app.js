'use strict'

import React, { Component } from 'react'
import axios from 'axios'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  getGitHubApiUrl (username, type) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}`
  }

  async handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      this.setState({ isFetching: true })

      try {
        const userInfo = await axios.get(this.getGitHubApiUrl(value))
        this.setState({
          userinfo: {
            username: userInfo.data.name,
            photo: userInfo.data.avatar_url,
            login: userInfo.data.login,
            repos: userInfo.data.public_repos,
            followers: userInfo.data.followers,
            following: userInfo.data.following
          },
          repos: [],
          starred: [],
          isFetching: false
        })
      } catch (err) {
        console.log(err)
      }
    }
  }

  getRepos (type) {
    return async (e) => {
      const username = this.state.userinfo.login
      try {
        const repos = await axios.get(this.getGitHubApiUrl(username, type))
        this.setState({
          [type]: repos.data.map(repo => ({
            name: repo.name,
            link: repo.html_url
          }))
        })
      } catch (e) {
        console.log(e)
      }
    }
  }

  render () {
    return <AppContent
      {...this.state}
      handleSearch={this.handleSearch}
      getRepos={this.getRepos('repos')}
      getStarred={this.getRepos('starred')}
    />
  }
}

export default App
