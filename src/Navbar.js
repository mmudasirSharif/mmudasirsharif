import React from 'react';

import { FaTwitter, FaGithub, FaGoogle, FaPhone } from 'react-icons/fa';

function Navbar() {
  return (
    <nav>
      <h1 className='name'>m.</h1>
      {/* <ul className="navbar-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About</a></li>
      </ul> */}
      <div className="navbar-list">
                <a href="https://twitter.com">
                    <FaTwitter />
                </a>
                <a href="https://github.com">
                    <FaGithub />
                </a>
                <a href="mailto:muhammadmudassar6464@gmail.com">
                    <FaGoogle />
                </a>
                <a href="tel:+923074178586">
                    <FaPhone />
                </a>
            </div>
    </nav>
  );
}

export default Navbar;
