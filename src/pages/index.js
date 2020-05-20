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
      <section className="aboutSection">
        <div className="container">
          <h2 className="aboutSection__name text-dark">{author}</h2>
          <h3 className="aboutSection__tagline text-dark">{tagline}</h3>
          <p
            className="aboutSection__bio text-dark"
            dangerouslySetInnerHTML={{ __html: extendedBio }}
          ></p>
        </div>
      </section>
    </Layout>
  )
}
