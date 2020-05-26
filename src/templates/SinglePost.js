import React from "react"
import { graphql } from "gatsby"
import Layout from "./../components/Layout"
import Img from "gatsby-image"

const SinglePost = ({ data }) => {
  const {
    html,
    frontmatter: { title, date, img },
  } = data.markdownRemark
  return (
    <Layout>
      <section className="postPage text-dark">
        <h1 className="postPage__title">{title}</h1>
        <span className="postPage__date text-grey">Posted {date}</span>
        <Img alt={title} fluid={img.childImageSharp.fluid} />
        <div
          className="postPage__body"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
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
            fluid(maxWidth: 1000, quality: 90, maxHeight: 600) {
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
