import React from 'react'

const Header = () => (
  <nav className='navbar is-dark' role='navigation' aria-label='main navigation'>
    <div className='navbar-brand'>
      <a className='navbar-item' href='https://bulma.io'>
        <img src='https://bulma.io/images/bulma-logo.png' alt='Bulma: a modern CSS framework based on Flexbox' width='112' height='28' />
      </a>

      <button className='button navbar-burger'>
        <span />
        <span />
        <span />
      </button>
    </div>
  </nav>
)

export default Header
