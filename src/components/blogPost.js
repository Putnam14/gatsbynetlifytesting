import React, { Component } from 'react'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Card from './Card'

const blogPost = ({ blogPost }) => (
  <Card>
    <h3>{blogPost.title}</h3>
    <p>{blogPost.text}</p>
    <Link>Read more</Link>
  </Card>
)

export default blogPost
