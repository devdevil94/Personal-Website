import React from "react"
import { graphql } from "gatsby"
import Layout from "./../components/Layout"
import Img from "gatsby-image"

const SinglePost = ({ data }) => {
  const {
    html,
    frontmatter: { title, date },
  } = data.markdownRemark
  return (
    <Layout>
      <section className="blogPage text-dark">
        <h1 className="blogPage__title">{title}</h1>

        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </section>
    </Layout>
  )
}

export const singlePostQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMM D YYYY")
        tags
        img {
          childImageSharp {
            fluid(maxWidth: 700, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        seo {
          description
        }
      }
    }
  }
`

export default SinglePost
