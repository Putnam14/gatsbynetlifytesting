import React, { Component } from 'react'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Card from './Card'

class project extends Component {
  render() {
    return (
      <Card>
        <h2>This is a project</h2>
        <p>[Image goes here]</p>
        <p>About the project</p>
        <Link>Link to the project</Link>
      </Card>
    )
  }
}

export default project
