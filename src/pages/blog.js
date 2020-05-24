import React, { useState } from "react"
import Layout from "./../components/Layout"
import PostCard from "../components/PostCard"

const BlogPage = ({ data, location }) => {
  const [page, setPage] = useState(1)
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <div className="container">
        <ul className="recentPostsSection__list">
          {(posts || []).map(({ node: post }) => (
            <li key={post.id} className="postCard rounded">
              <PostCard
                title={post.frontmatter.title}
                slug={post.fields.slug}
                date={post.frontmatter.date}
                excerpt={post.excerpt}
                fluid={post.frontmatter.img.childImageSharp.fluid}
              />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const recentPostsQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM D, YYYY")
            tags
            img {
              childImageSharp {
                fluid(maxWidth: 600, quality: 90, maxHeight: 380) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default BlogPage
