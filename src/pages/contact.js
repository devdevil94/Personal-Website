import React, { useState, useEffect } from "react"
import Layout from "./../components/Layout"
import SEO from "../components/SEO"

export default function ContactPage() {
  const [accounts, setAccounts] = useState({})

  useEffect(() => {
    const fetchSiteAccounts = async () => {
      const siteData = (await import("../../static/siteConfig.json")).default

      setAccounts(siteData.accounts)
    }
    fetchSiteAccounts()
  }, [])
  const info = `If you're interested in hiring me for a project or just want to say
                hi, you can fill in the contact form below. Also, feel free to
                follow me on the social channels below.`
  return (
    <Layout>
      <SEO title="Contact" description={info} />
      <section className="contactPage text-dark">
        <div>
          <h1 className="contactPage__title">Contact</h1>
          <p className="contactPage__info">
            {info}
            {/* <span role="img" aria-label="Smiley wearing glasses">
              &#128526;
            </span> */}
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

        <hr className="rule" />

        <form
          method="POST"
          name="contact-form"
          className="contactForm text-center"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <h2 className="contactForm__title">Get In Touch</h2>
          <div className="inline-fields">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="contactForm__input rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="contactForm__input rounded"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="contactForm__input rounded"
            required
          />
          <textarea
            name="message"
            rows="10"
            placeholder="Message"
            className="contactForm__textarea rounded"
            required
          ></textarea>
          <button
            type="submit"
            className="contactForm__submit bg-primary text-white rounded"
          >
            Submit
          </button>
        </form>
      </section>
    </Layout>
  )
}
