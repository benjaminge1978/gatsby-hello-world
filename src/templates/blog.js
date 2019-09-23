import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

export const query = graphql`
query ($slug: String!){
    markdownRemark(fields: {slug: {eq: $slug} }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`


const Blog = (props) => {
    return (
   <div>
        <Header />
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
            <Footer />
    </div>

    )
}

export default Blog