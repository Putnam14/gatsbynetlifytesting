import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import Header from './header'
import Footer from './footer'
import './layout.css'

const theme = {
  bgDark: 'rgba(27, 27, 27, 0.75)',
  dark: 'rgb(27, 27, 27)',
  light: 'whitesmoke',
  linkText: 'teal',
  linkTextActive: 'rgb(1, 90, 90)',
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  offWhite: '#EDEDED',
  headerHeight: '85vh',
  maxWidth: '960px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
}

const StyledPage = styled.div`
  background: ${props => props.theme.offWhite};
  color: ${props => props.theme.black};
  a {
    text-decoration: none;
    color: ${props => props.theme.linkText};
  }
  a:hover {
    cursor: pointer;
    color: ${props => props.theme.linkTextActive};
    transition: color 0.2s;
  }
`

const Inner = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  main {
    background: ${props => props.theme.light};
    margin: 0 auto;
    padding-bottom: 1.45rem;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    box-shadow: ${props => props.theme.bs};
    max-width: ${props => props.theme.maxWidth};
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Inner>{children}</Inner>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
