import React, { useState, useEffect } from "react"
import Layout from "./../components/Layout"
import PostCard from "../components/PostCard"
import { navigate, graphql } from "gatsby"
import SEO from "../components/SEO"

const BlogPage = ({ data, location }) => {
  const [page, setPage] = useState(1)
  const [pagePosts, setPagePosts] = useState([])

  const posts = data.allMarkdownRemark.edges
  const totalPosts = posts.length
  const postsPerPage = 9
  const totalPages = Math.floor(
    totalPosts % postsPerPage !== 0
      ? totalPosts / postsPerPage + 1
      : totalPosts / postsPerPage
  )

  useEffect(() => {
    const updatePosts = async () => {
      const newPage = new URLSearchParams(location.search).get("page")

      if (newPage) {
        if (!isNaN(newPage) && newPage >= 1 && newPage <= totalPages) {
          const start = (newPage - 1) * postsPerPage
          const end = start + postsPerPage

          setPage(parseInt(newPage))
          setPagePosts(posts.slice(start, end))
        } else {
          // setPage(1)
          // setPagePosts(posts.slice(0, postsPerPage))
          // navigate("/blog/?page=1")
          navigate("/404", { replace: true })
        }
      } else {
        setPage(1)
        setPagePosts(posts.slice(0, postsPerPage))
        // navigate("/blog?page=1", { replace: true })
      }
    }
    updatePosts()
  }, [page])

  const temp = new Array(totalPages).fill(0)

  const toPage = num => {
    setPage(num)
    navigate(`/blog?page=${num}`)
  }

  return (
    <Layout>
      <SEO title="Blog" description={data.site.siteMetadata.description} />
      <section className="blogPage text-dark">
        <h1 className="blogPage__title">Blog Posts</h1>

        <ul className="blogPage__list">
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

        <div className="pagination">
          {(temp || []).map((_, i) => (
            <button
              key={i}
              className={`pagination__btn text-white bg-primary${
                page === i + 1 ? " pagination__btn--disabled" : ""
              }`}
              onClick={() => toPage(i + 1)}
              disabled={page === i + 1 ? true : false}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const recentPostsQuery = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
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
          excerpt(pruneLength: 100)
        }
      }
    }
  }
`

export default BlogPage
