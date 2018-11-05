import React, { Component } from 'react'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Card from './Card'

class blogPost extends Component {
  render() {
    return (
      <Card>
        <h2>Blog Post Title</h2>
        <p>Blog post preview...</p>
        <Link>Link to post</Link>
      </Card>
    )
  }
}

export default blogPost
