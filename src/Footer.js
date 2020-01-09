import React from "react";
import './App.css';
const FooterPage = () => {
  return (
    <div class="footer-fixed">
	<footer class="red lighten-2">
		<nav class="z-depth-0">
			<div class="nav-wrapper">
				<ul class="justify">
					<li><a href="#!"><i class="material-icons">filter</i></a></li>
					<li><a href="#!"><i class="material-icons">chat_bubble</i></a></li>
					<li><a class="active" href="#test3"><i class="material-icons">home</i></a></li>
					<li><a href="#!"><i class="material-icons">camera_alt</i></a></li>
					<li><a href="#!"><i class="material-icons">camera_roll</i></a></li>
				</ul>
			</div>
		</nav>
	</footer>
</div>
  );
}

export default FooterPage;