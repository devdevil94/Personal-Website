import React, { useEffect, useState } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "portfolio_avatar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const [profile, setProfile] = useState({})

  useEffect(() => {
    const fetchSiteConfig = async () => {
      const siteData = (await import("../../static/siteConfig.json")).default

      setProfile(siteData)
    }
    fetchSiteConfig()
  }, [])

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__top">
          <label
            htmlFor="menu-toggle"
            className="navbar__menuBars text-white rounded"
          >
            <i className="fa fa-bars"></i>
          </label>
          <h1 className="navbar__brand text-white text-center">
            {profile.brand}
          </h1>
        </div>
        <input type="checkbox" id="menu-toggle" />
        <div className="navbar__side">
          <div className="profile">
            <div className="profile__imgWrapper">
              <Img
                fluid={data.avatar.childImageSharp.fluid}
                alt={profile.author}
                className="profile__img rounded-full"
              />
            </div>
            <p className="profile__bio text-white text-center">
              {profile?.bio ?? "Hi there! Welcome to my website"}
            </p>
          </div>
          <ul className="socialList">
            <li className="socialList__item">
              <a
                href={profile?.accounts?.twitter}
                className="rounded-full bg-white text-primary"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="socialList__item">
              <a
                href={profile?.accounts?.github}
                className="rounded-full bg-white text-primary"
              >
                <i className="fab fa-github-alt"></i>
              </a>
            </li>
            <li className="socialList__item">
              <a
                href={profile?.accounts?.codepen}
                className="rounded-full bg-white text-primary"
              >
                <i className="fab fa-codepen"></i>
              </a>
            </li>
          </ul>

          <hr className="rule" />

          <ul className="navLinks">
            <li className="navLinks__item">
              <Link to="/">
                <i className="fa fa-user-secret"></i>
                About Me
              </Link>
            </li>
            <li className="navLinks__item">
              <Link to="/blog">
                <i className="fa fa-blog"></i>
                Blog
              </Link>
            </li>
            <li className="navLinks__item">
              <Link to="/contact">
                <i className="fa fa-phone-alt"></i>
                Contact
              </Link>
            </li>
          </ul>

          <hr className="rule" />

          <a
            href={profile?.accounts?.upwork}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__hireBtn text-center text-white rounded"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}
