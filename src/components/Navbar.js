import React from "react"

export default function Navbar() {
  return (
    <header className="bg-primary">
      <div className="navbar">
        <div className="container">
          <div className="navbar__top ">
            <label
              htmlFor="menu-toggle"
              className="navbar__menuBars text-white rounded"
            >
              <i className="fa fa-bars"></i>
            </label>
            <div className="navbar__brand text-white">
              <span>Devdevil</span>
            </div>
            <input type="checkbox" id="menu-toggle" />
          </div>
        </div>
      </div>
    </header>
  )
}
