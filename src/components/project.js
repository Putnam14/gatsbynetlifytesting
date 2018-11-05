import React, { Component } from 'react'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Card from './Card'

const project = ({ projData }) => (
  <Card>
    <h3>{projData.title}</h3>
    <Img alt={`${projData.title} preview`} fluid={projData.imgLink} />
    <p>{projData.text}</p>
    <a href={projData.projLink}>Visit {projData.title}</a>
  </Card>
)

export default project
