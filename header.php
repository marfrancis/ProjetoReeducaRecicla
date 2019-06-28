<style>#loading{background-color: green;height: 100%;width: 100%;position: fixed;z-index: 999999;margin-top: 0px;top: 0px;}#loading-center{width: 100%;height: 100%;position: relative;}#loading-center-absolute {position: absolute;left: 50%;top: 50%;height: 150px;width: 150px;margin-top: -75px;margin-left: -75px;   -ms-transform: rotate(45deg); -webkit-transform: rotate(45deg);transform: rotate(45deg); }.object{width: 20px;height: 20px;background-color:#FFF;position: absolute;left: 65px;top: 65px;}.object:nth-child(2n+0) {margin-right: 0px;}#object_one {-webkit-animation: object_one 2s infinite;animation: object_one 2s infinite;-webkit-animation-delay: 0.2s; animation-delay: 0.2s; }#object_two {-webkit-animation: object_two 2s infinite;animation: object_two 2s infinite;-webkit-animation-delay: 0.3s; animation-delay: 0.3s; }#object_three {-webkit-animation: object_three 2s infinite;animation: object_three 2s infinite;-webkit-animation-delay: 0.4s; animation-delay: 0.4s; }#object_four {-webkit-animation: object_four 2s infinite;animation: object_four 2s infinite;-webkit-animation-delay: 0.5s; animation-delay: 0.5s; }#object_five {-webkit-animation: object_five 2s infinite;animation: object_five 2s infinite;-webkit-animation-delay: 0.6s; animation-delay: 0.6s; }#object_six {-webkit-animation: object_six 2s infinite;animation: object_six 2s infinite;-webkit-animation-delay: 0.7s; animation-delay: 0.7s; }#object_seven {-webkit-animation: object_seven 2s infinite;animation: object_seven 2s infinite;-webkit-animation-delay: 0.8s; animation-delay: 0.8s; }#object_eight {-webkit-animation: object_eight 2s infinite;animation: object_eight 2s infinite;-webkit-animation-delay: 0.9s; animation-delay: 0.9s; }#object_big{position: absolute;width: 50px;height: 50px;left: 50px;top: 50px;-webkit-animation: object_big 2s infinite;animation: object_big 2s infinite;-webkit-animation-delay: 0.5s; animation-delay: 0.5s; }  @-webkit-keyframes object_big {50% { -webkit-transform: scale(0.5); }}@keyframes object_big {50% { transform: scale(0.5);-webkit-transform: scale(0.5);} }@-webkit-keyframes object_one {50% { -webkit-transform: translate(-65px,-65px)  ; }}@keyframes object_one {50% { transform: translate(-65px,-65px) ;-webkit-transform: translate(-65px,-65px) ;} }@-webkit-keyframes object_two {50% { -webkit-transform: translate(0,-65px) ; }}@keyframes object_two {50% { transform: translate(0,-65px) ; -webkit-transform: translate(0,-65px) ; } }@-webkit-keyframes object_three {50% { -webkit-transform: translate(65px,-65px) ; }}@keyframes object_three {50% { transform: translate(65px,-65px) ;-webkit-transform: translate(65px,-65px) ;} }@-webkit-keyframes object_four {50% { -webkit-transform: translate(65px,0) ; }}@keyframes object_four {50% { transform: translate(65px,0) ;-webkit-transform: translate(65px,0) ;} }@-webkit-keyframes object_five {50% { -webkit-transform: translate(65px,65px) ; }}@keyframes object_five {50% { transform: translate(65px,65px) ;-webkit-transform: translate(65px,65px) ;} }@-webkit-keyframes object_six {50% { -webkit-transform: translate(0,65px) ; }}@keyframes object_six {50% { transform:  translate(0,65px) ;-webkit-transform:  translate(0,65px) ;} }@-webkit-keyframes object_seven {50% { -webkit-transform: translate(-65px,65px) ; }}@keyframes object_seven {50% { transform: translate(-65px,65px) ;-webkit-transform: translate(-65px,65px) ;} }@-webkit-keyframes object_eight {50% { -webkit-transform: translate(-65px,0) ; }}@keyframes object_eight {50% { transform: translate(-65px,0) ;-webkit-transform: translate(-65px,0) ;} }</style>
<div id="loading"><div id="loading-center"><div id="loading-center-absolute"><div class="object" id="object_one"></div><div class="object" id="object_two"></div><div class="object" id="object_three"></div><div class="object" id="object_four"></div><div class="object" id="object_five"></div><div class="object" id="object_six"></div><div class="object" id="object_seven"></div><div class="object" id="object_eight"></div><div class="object" id="object_big"></div></div></div></div>
<?php if (false): ?>
<?php endif ?>
<header>
	<nav class="navbar navbar-light bg-white active shadow p-3 mb-0 displayQuery">
		<div class="col-4">
			<a class="navbar-brand align-self-start" href="./">
				<img src="img/logo_lado.png" class="logoMargin logoSize" alt="">
			</a>
		</div>
		<div class="col-8">
			<ul class="nav marginHeader justify-content-end">
				<li class="nav-item">
					<a class="nav-link active grow efeitoTransicao" href="index.php">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link grow efeitoTransicao" href="sobre.php">Sobre nós</a>
				</li>
				<li class="nav-item">
					<a class="nav-link grow efeitoTransicao" href="loja.php">Loja</a>
				</li>
				<li class="nav-item">
					<a class="nav-link grow efeitoTransicao" href="contato.php">Contato</a>
				</li>
				<li class="nav-item">
					<a class="nav-link grow efeitoTransicao" href="mapa.php">Mapa</a>
				</li>
				<li class="nav-item">
					<a class="nav-link grow efeitoTransicao" href="login.php">Login</a>
				</li>

			</ul>
		</div>
	</nav>
	<nav class="navbar navbar-expand-lg navbar-light bg-light displayBurg">
		<div class="row col-12 no-gutters">
			<div class="col-5">
				<a class="navbar-brand align-self-start" href="./">
					<img src="img/logo_lado.png" class="logoMargin logoSize" alt="">
				</a>
			</div>
			<div class="col">
				<button class="navbar-toggler pull-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
				aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
		</div>
		<div class="collapse navbar-collapse " id="navbarTogglerDemo02">
			<ul class="navbar-nav mr-auto mt-2 mt-lg-0 text-center">
				<li class="nav-item">
					<a class="nav-link headerBurg" href="index.php">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link headerBurg" href="sobre.php">Sobre nós</a>
				</li>
				<li class="nav-item">
					<a class="nav-link headerBurg" href="loja.php">Loja</a>
				</li>
				<li class="nav-item">
					<a class="nav-link headerBurg" href="contato.php">Contato</a>
				</li>
				<li class="nav-item">
					<a class="nav-link headerBurg" href="mapa.php">Mapa</a>
				</li>
				<li class="nav-item">
					<a class="nav-link headerBurg" href="login.php">Login</a>
				</li>
			</ul>
		</div>
	</div>
</nav>




</header>