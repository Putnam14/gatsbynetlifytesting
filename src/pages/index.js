import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout'

const IndexHeader = styled.header`
  margin: -3rem -2rem 0;
  max-width: 100vw;
  height: 100vh;
`
const Welcome = styled.div`
  z-index: 1;
  position: absolute;
  height: 100%;
  width: 100%;
  display: grid;
  justify-items: center;
  align-content: center;
  text-align: center;
  color: ${props => props.theme.light};
  p {
    font-size: 1.5em;
  }
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.2), 0 0 2px rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.6);
`

const IndexPage = props => {
  const { data } = props
  return (
    <Layout>
      <IndexHeader>
        <Welcome>
          <h1>Bridger Putnam</h1>
          <p>Will somebody please buy me some Yeezys</p>
        </Welcome>
        <Img
          title="Header background image"
          alt=""
          fluid={data.backgroundImage.childImageSharp.fluid}
          style={{
            zIndex: '0',
            objectFit: 'cover',
            objectPosition: '50% 50%',
            position: 'absolute',
            height: '100%',
            width: '100%',
            top: '0',
            left: '0',
            margin: 'auto',
          }}
        />
      </IndexHeader>
      <h1>Let's put some text here</h1>
      <p>And some more here to convince people to hire me</p>
      <p>Look at this crack dog:</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Img
          title="Test image"
          alt="This is a test image"
          fluid={data.profilePic.childImageSharp.fluid}
        />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query Images {
    profilePic: file(relativePath: { eq: "me.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    backgroundImage: file(relativePath: { eq: "falls.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
// TODO Props validation
