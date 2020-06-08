import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const Navigation = styled.nav`
  padding: 0 5rem;

  ul {
    margin: 0;
    list-style: none;
  }

  li {
    padding: 1rem;
    display: inline-block;
  }

  li a {
    color: white;
    text-decoration: none;
  }
`;

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            letterSpacing: '0.04em',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>

    <Navigation>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/page-2">Page-2</Link></li>
        <li><Link to="/comments">Comments</Link></li>
      </ul>
    </Navigation>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
