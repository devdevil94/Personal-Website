import React from "react"
import Layout from "./../components/Layout"
import SEO from "../components/SEO"

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404" description="This page doesn't exist... Sorry!" />
      <section className="notFoundPage text-dark">
        <h1 className="notFoundPage__title">NOT FOUND</h1>
        <h2 className="notFound__404 text-center">404</h2>
        <p className="text-center">This page doesn't exist... Sorry!</p>
      </section>
    </Layout>
  )
}
