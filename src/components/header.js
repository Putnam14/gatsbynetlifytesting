import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Headroom from 'react-headroom'

const Nav = styled.nav`
  height: 3rem;
  background-color: ${props => props.theme.bgDark};
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 0 2rem 0;
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  a {
    padding-left: 2rem;
    text-decoration: none;
    color: ${props => props.theme.textLight};
    transition: color 0.2s;
    :hover {
      color: ${props => props.theme.textPrimary};
    }
    .active {
      color: ${props => props.theme.textPrimaryDarker};
    }
  }
`

const Header = ({ siteTitle }) => (
  <Headroom style={{ zIndex: '100' }}>
    <Nav>
      <Link to="/" activeClassName="active">
        {siteTitle}
      </Link>
      <span>
        <Link to="/#about-me" activeClassName="active">
          About
        </Link>
        <Link to="/#projects" activeClassName="active">
          Projects
        </Link>
        <Link to="/#blog" activeClassName="active">
          Blog
        </Link>
      </span>
    </Nav>
  </Headroom>
)

export default Header
