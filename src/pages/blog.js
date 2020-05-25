import React, { useState, useEffect } from "react"
import Layout from "./../components/Layout"
import PostCard from "../components/PostCard"
import { navigate } from "gatsby"

const BlogPage = ({ data, location }) => {
  const [page, setPage] = useState(1)
  const [pagePosts, setPagePosts] = useState([])

  const posts = data.allMarkdownRemark.edges

  const totalPosts = posts.length
  const postsPerPage = 6
  const totalPages = Math.floor(
    totalPosts % postsPerPage !== 0
      ? totalPosts / postsPerPage + 1
      : totalPosts / postsPerPage
  )

  useEffect(() => {
    const updatePosts = async () => {
      const newPage = new URLSearchParams(location.search).get("page")

      if (!isNaN(newPage) && newPage >= 1 && newPage <= totalPages) {
        const start = (newPage - 1) * postsPerPage
        const end = start + postsPerPage

        setPage(newPage)
        setPagePosts(posts.slice(start, end))
      } else {
        // setPage(1)
        // setPagePosts(posts.slice(0, postsPerPage))
        // navigate("/blog/?page=1")
        navigate("/404", { replace: true })
      }
    }
    updatePosts()
  }, [page])

  return (
    <Layout>
      <div className="container">
        <ul className="postCardsSection__list">
          {(pagePosts || []).map(({ node: post }) => (
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
            date(formatString: "MMM D YYYY")
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
