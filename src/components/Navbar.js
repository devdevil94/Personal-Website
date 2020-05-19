import React from "react"

export default function Navbar() {
  return (
    <header className="bg-primary">
      <nav className="navbar">
        <div className="container">
          <div className="navbar__top">
            <label
              htmlFor="menu-toggle"
              className="navbar__menuBars text-white rounded"
            >
              <i className="fa fa-bars"></i>
            </label>
            <div className="navbar__brand text-white">
              <span>Devdevil</span>
            </div>
          </div>
          <input type="checkbox" id="menu-toggle" />
          <div className="navbar__side">
            <div className="profile">
              {/* <Img className="profile__img rounded-full" /> */}
              <p className="profile__bio">
                Hi, my name is Saud and welcome to my website!
              </p>
            </div>
            <hr className="navbar__separator" />
          </div>
        </div>
      </nav>
    </header>
  )
}
