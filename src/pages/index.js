import React, { useEffect, useState } from "react"
import Layout from "./../components/Layout"
import { graphql, Link } from "gatsby"
// import Img from "gatsby-image"
import SEO from "../components/SEO"
import PostCard from "../components/PostCard"
import Adonis from "../icons/Adonis"
import Gatsby from "../icons/Gatsby"
import Next from "../icons/Next"

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

  return (
    <Layout>
      <SEO title="Home" description={extendedBio} />
      <section className="aboutSection text-dark">
        {/* <div> */}
        <h2 className="aboutSection__name">{author}</h2>
        <h3 className="aboutSection__tagline">{tagline}</h3>
        <p
          className="aboutSection__bio"
          dangerouslySetInnerHTML={{ __html: extendedBio }}
        ></p>
        {/* </div> */}
        {/* <div className="aboutSection__imgWrapper">
          <Img alt={tagline} fluid={data.homeImg.childImageSharp.fluid} />
        </div> */}
        {/* <!-- Later, I discovered ReactJS framework/library which simplified the process of building complex
         websites and applications. I also expanded my knowledge of web development by learning React frameworks
          like NextJS and GatsbyJS, and AdonisJS framework for backend development.
           <br /> I write tutorials and posts in <a href='/blog'>my blog</a> 
           about topics related to anything I learned or am learning. --> */}
      </section>

      <hr className="rule" />

      <section className="skillsSection text-dark">
        <h2 className="skillsSection__title">My Skills</h2>
        <p className="skillsSection__info">
          Here is a list of web-related skill sets and technologies that I use.
        </p>
        <ul className="skillsSection__list text-center">
          <li className="skillBox">
            <div className="skillBox__icons">
              <i className="fab fa-html5"></i>
              <i className="fab fa-css3-alt"></i>
            </div>
            <h3 className="skillBox__title">HTML &amp; CSS</h3>
            {/* <p className="skillBox__description">
              Creating web layouts using semantic code and enhancing
            </p> */}
          </li>
          <li className="skillBox">
            <div className="skillBox__icons">
              <i className="fab fa-js-square"></i>
            </div>
            <h3 className="skillBox__title">JavaScript</h3>
            {/* <p className="skillBox__description">
              Extending the functionality of web pages and Adding a level of
              interactivity to them.
            </p> */}
          </li>
          <li className="skillBox">
            <div className="skillBox__icons">
              <i className="fab fa-react"></i>
            </div>
            <h3 className="skillBox__title">ReactJS</h3>
            {/* <p className="skillBox__description">
              Using ReactJS provides a comprehensive and organised applications
            </p> */}
          </li>
          <li className="skillBox">
            <div className="skillBox__icons">
              <i className="fab fa-sass"></i>
            </div>
            <h3 className="skillBox__title">SASS</h3>
            {/* <p className="skillBox__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              deleniti.
            </p> */}
          </li>
          <li className="skillBox">
            <div className="skillBox__icons">
              <i className="fab fa-npm"></i>
            </div>
            <h3 className="skillBox__title">NPM</h3>
            {/* <p className="skillBox__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              deleniti.
            </p> */}
          </li>
          <li className="skillBox">
            <div className="skillBox__icons">
              <Adonis />
            </div>
            <h3 className="skillBox__title">AdonisJS</h3>
            {/* <p className="skillBox__description">
              Creating APIs and server-side web applications
            </p> */}
          </li>
          <li className="skillBox">
            <div className="skillBox__icons">
              <Gatsby />
            </div>
            <h3 className="skillBox__title">GatsbyJS</h3>
            {/* <p className="skillBox__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              deleniti.
            </p> */}
          </li>
          <li className="skillBox">
            <div className="skillBox__icons">
              <Next />
            </div>
            <h3 className="skillBox__title">NextJS</h3>
            {/* <p className="skillBox__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              deleniti.
            </p> */}
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
    homeImg: file(
      relativePath: { eq: "coding-computer-data-depth-of-field-577585.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
