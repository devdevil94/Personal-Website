import React from "react"
import "../styles/main.css"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="pageWrapper">
      <header className="pageWrapper__header bg-primary">
        <Navbar />
      </header>
      <main className="pageWrapper__main bg-white">
        {children}
        <footer className="footer">
          <div className="container">
            <div className="text-center">
              Devdevil © {new Date().getFullYear()}
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
