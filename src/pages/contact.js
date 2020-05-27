import React, { useState, useEffect } from "react"
import Layout from "./../components/Layout"

export default function ContactPage() {
  const [accounts, setAccounts] = useState({})

  useEffect(() => {
    const fetchSiteAccounts = async () => {
      const siteData = (await import("../../static/siteConfig.json")).default

      setAccounts(siteData.accounts)
    }
    fetchSiteAccounts()
  }, [])

  return (
    <Layout>
      <section className="contactPage text-dark">
        <div>
          <h1 className="contactPage__title">Contact</h1>
          <p>
            Interested in hiring me for your project or just want to say hi? You
            can fill in the contact form below or send me an email to
            simon.doe@yourwebsite.com Want to get connected? Follow me on the
            social channels below.
          </p>
          <ul className="socialList">
            <li className="socialList__item">
              <a
                href={accounts?.twitter}
                className="rounded-full bg-white text-primary"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="socialList__item">
              <a
                href={accounts?.github}
                className="rounded-full bg-white text-primary"
              >
                <i className="fab fa-github-alt"></i>
              </a>
            </li>
            <li className="socialList__item">
              <a
                href={accounts?.codepen}
                className="rounded-full bg-white text-primary"
              >
                <i className="fab fa-codepen"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}
