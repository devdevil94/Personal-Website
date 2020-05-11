import React from "react"
import "../styles/main.css"

export default function Layout({ children }) {
  return (
    <>
      <header>
        <div className="text-primary">This is a header</div>
      </header>
      <main>{children}</main>
      <footer>
        <div>This is a footer</div>
      </footer>
    </>
  )
}
