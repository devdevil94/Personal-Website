import React from "react"
import "../styles/main.css"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer>
        <div>This is a footer</div>
      </footer>
    </>
  )
}
