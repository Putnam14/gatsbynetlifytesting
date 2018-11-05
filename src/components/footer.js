import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const FooterStyle = styled.footer`
  background-color: ${props => props.theme.black};
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  p {
    margin-bottom: 0;
    color: ${props => props.theme.light};
  }
`
const Footer = () => (
  <FooterStyle>
    <p>Hello, I'm part of the footer</p>
    <p>I'm another part of the footer</p>
  </FooterStyle>
)

export default Footer
