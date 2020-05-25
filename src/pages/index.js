import React, { useEffect, useState } from "react"
import Layout from "./../components/Layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import PostCard from "../components/PostCard"

const IndexPage = ({ data }) => {
  const [profile, setProfile] = useState({})

  const posts = data.allMarkdownRemark.edges

  useEffect(() => {
    const fetchSiteConfig = async () => {
      const siteData = (await import("../../static/siteConfig.json")).default

      setProfile(siteData)
    }
    fetchSiteConfig()
  }, [])

  const { author, tagline, extendedBio } = profile
  console.log(posts)
  return (
    <Layout>
      <section className="aboutSection text-dark">
        <h2 className="aboutSection__name">{author}</h2>
        <h3 className="aboutSection__tagline">{tagline}</h3>
        <p
          className="aboutSection__bio"
          dangerouslySetInnerHTML={{ __html: extendedBio }}
        ></p>
      </section>

      <hr className="rule" />

      <section className="skillsSection text-dark">
        <h2 className="skillsSection__title">Things I do</h2>
        <p className="skillsSection__info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          fugiat, distinctio culpa esse velit ducimus possimus neque sint animi
          vero?
        </p>
        <ul className="skillsSection__list">
          <li className="skillBox">
            <div className="skillBox__icons">
              <i className="fab fa-html5"></i>
              <i className="fab fa-css3-alt"></i>
            </div>
            <h3 className="skillBox__title">HTML &amp; CSS</h3>
            <p className="skillBox__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              deleniti.
            </p>
          </li>
          <li className="skillBox">
            <div className="skillBox__icons">
              <i className="fab fa-js-square"></i>
            </div>
            <h3 className="skillBox__title">JavaScript</h3>

            <p className="skillBox__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              deleniti.
            </p>
          </li>
          <li className="skillBox">
            <div className="skillBox__icons">
              <i className="fab fa-react"></i>
            </div>
            <h3 className="skillBox__title">ReactJS</h3>

            <p className="skillBox__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              deleniti.
            </p>
          </li>
          <li className="skillBox">
            <div className="skillBox__icons">
              <i className="fab fa-sass"></i>
            </div>
            <h3 className="skillBox__title">SASS</h3>
            <p className="skillBox__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              deleniti.
            </p>
          </li>
        </ul>
      </section>

      <hr className="rule" />

      <section className="postCardsSection text-dark">
        <h2 className="postCardsSection__title">Recent Blog Posts</h2>
        <ul className="postCardsSection__list">
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
        <div className="text-center">
          <Link
            to="/blog"
            className="postCardsSection__button text-white bg-primary rounded"
          >
            View All Posts
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const recentPostsQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
    ) {
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

export default IndexPage
