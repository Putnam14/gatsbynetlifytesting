import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import BlogPost from '../components/blogPost'
import Project from '../components/project'

const IndexHeader = styled.header`
  margin: -3rem -2rem 0;
  max-width: 100vw;
  height: ${props => props.theme.headerHeight};
`
const Welcome = styled.div`
  position: relative;
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
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: ${props => props.theme.headerHeight};
  top: 0;
  left: 0;
`
const BlogPostContainer = styled.div`
  margin: -1rem 2rem 2rem;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2rem;
  justify-items: space-evenly;
`
const Projects = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`
const ProjectContainer = styled.div`
  margin: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  justify-items: space-evenly;
`
const About = styled.div`
  padding: 0 2rem;
`

const IndexPage = props => {
  const { data } = props
  const blogPostsData = {
    post1: {
      title: 'Blog Post 1',
      imgLink: '',
      text: 'This is a blog post',
      postLink: 'Test Link',
    },
    post2: {
      title: 'Blog Post 2',
      imgLink: '',
      text: 'This is a blog post',
      postLink: 'Test Link',
    },
    post3: {
      title: 'Blog Post 3',
      imgLink: 'me.png',
      text: 'This is a blog post',
      postLink: 'Test Link',
    },
  }
  const blogPosts = Object.keys(blogPostsData).map(key => (
    <BlogPost blogPost={blogPostsData[key]} />
  ))
  const projectsData = {
    project1: {
      title: 'Reading Length',
      imgLink: data.rLImage.childImageSharp.fluid,
      text:
        'Book length search engine using React, Apollo, Next.JS, GraphQL, and third-party APIs',
      projLink: 'https://www.readinglength.com',
    },
  }
  const projects = Object.keys(projectsData).map(key => (
    <Project projData={projectsData[key]} />
  ))
  return (
    <Layout>
      <IndexHeader>
        <Background>
          <Img
            title="Header background image"
            alt=""
            fluid={data.backgroundImage.childImageSharp.fluid}
            style={{
              objectFit: 'cover',
              objectPosition: '50% 50%',
              height: '100%',
            }}
          />
        </Background>
        <Welcome>
          <h1>Bridger Putnam</h1>
          <p>Will somebody please buy me some Yeezys</p>
        </Welcome>
      </IndexHeader>
      <main>
        <BlogPostContainer id="blog">{blogPosts}</BlogPostContainer>
        <About id="about-me">
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
        </About>
        <Projects id="projects">
          <h2>Projects</h2>
          <ProjectContainer>{projects}</ProjectContainer>
        </Projects>
      </main>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
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
    rLImage: file(relativePath: { eq: "rl.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
// TODO Props validation
