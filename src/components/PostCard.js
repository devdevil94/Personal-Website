import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default function PostCard({ title, slug, date, excerpt, fluid }) {
  return (
    <>
      <Link to={`/blog/${slug}`}>
        <Img alt={title} fluid={fluid} />
      </Link>
      <div className="postCard__body">
        <h3 className="postCard__title">
          <Link to={`/blog/${slug}`} className="text-dark">
            {title}
          </Link>
        </h3>
        <p className="postCard__excerpt">{excerpt}</p>
        <span className="postCard__date text-grey">Posted {date}</span>
      </div>
    </>
  )
}
