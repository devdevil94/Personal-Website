import React from "react"
import "../styles/main.css"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="pageWrapper">
      <header className="pageWrapper__header bg-primary">
        <Navbar />
      </header>
      <main className="pageWrapper__main">
        {children}
        <div className="container">
          <footer>
            <div>This is a footer</div>
          </footer>
        </div>
      </main>
    </div>
  )
}
