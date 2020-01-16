import React from "react";
import './App.css';
import {MdChat, MdHome} from 'react-icons/md';
import {FaFacebookF, FaSnapchatGhost, FaInstagram,FaYoutube} from 'react-icons/fa';
const FooterPage = () => {
  return (
    <div class="footer-fixed">
	<footer class="red lighten-2">
		<nav class="z-depth-0">
			<div class="nav-wrapper">
				<ul class="justify">
					<div >
						<li>Follow us</li>
						<li><a href="#!"><FaFacebookF/></a></li>
						<li><a href="#!"><FaSnapchatGhost/></a></li>
						<li><a href="#!"><FaInstagram/></a></li>
						<li><a href="#!"><FaYoutube/></a></li>
					</div>
				</ul>
				<div float="left">
				<li><a href="#!"><MdChat/></a></li>
				<li><a href="#!"><MdHome/></a></li>
				</div>
			</div>
		</nav>
	</footer>
</div>
  );
}

export default FooterPage;