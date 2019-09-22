import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
              html
              excerpt
            }
          }
        }
      }
    `)

    console.log(data)

    return (
        <div>
            <h1>Blog</h1>
            <ol>
              {data.allMarkdownRemark.edges.map((edge, index) => {
                return (
                  <li key ={index}>
                    <h2>{edge.node.frontmatter.title}</h2>
                    <p></p>
                  </li>
                )
              })}
            </ol>
            </div>
    )
}

export default BlogPage