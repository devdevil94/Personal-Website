const path = require("path")
const { slugify } = require("./utils/functions")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = slugify(node.frontmatter.title)

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
