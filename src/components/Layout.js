import React from "react"
import "../styles/main.css"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="pageWrapper">
      <header className="pageWrapper__header bg-primary">
        <Navbar />
      </header>
      <main className="pageWrapper__main bg-white text-dark">
        <div className="pad">
          <div className="container">{children}</div>
        </div>
        <footer className="footer" style={{ backgroundColor: "whitesmoke" }}>
          <div className="text-center text-grey">
            Devdevil © {new Date().getFullYear()}
          </div>
        </footer>
      </main>
    </div>
  )
}
