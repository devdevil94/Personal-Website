import React, { useEffect, useState } from "react"
import Layout from "./../components/Layout"

export default function Index() {
  const [profile, setProfile] = useState({})

  useEffect(() => {
    const fetchSiteConfig = async () => {
      const siteData = (await import("../../static/siteConfig.json")).default

      setProfile(siteData)
    }
    fetchSiteConfig()
  }, [])

  console.log(profile)
  const { author, tagline, extendedBio } = profile

  return (
    <Layout>
      <section className="aboutSection text-dark">
        <div className="container">
          <h2 className="aboutSection__name">{author}</h2>
          <h3 className="aboutSection__tagline">{tagline}</h3>
          <p
            className="aboutSection__bio"
            dangerouslySetInnerHTML={{ __html: extendedBio }}
          ></p>
        </div>
      </section>
      <section className="skillsSection text-dark">
        <div className="container">
          <h2 className="skillsSection__header">Things I do</h2>
          <p className="skillsSection__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            fugiat, distinctio culpa esse velit ducimus possimus neque sint
            animi vero?
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
        </div>
      </section>
    </Layout>
  )
}
