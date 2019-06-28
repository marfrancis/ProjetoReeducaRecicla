<!DOCTYPE html>
<html lang="pt">

<?php
$root = 'http://localhost/projetoreeducarecicla/';
$foto = 'salveo%20planeta.png';

$title = $facebook_title = "Home";
$keywords = 'recicla,palavras,chave,separadas,por,virgula';
$description = $facebook_description = substr(strip_tags('<p>A Reeduca, por sua atitude empresarial e pela qualidade das relações que busca desenvolver com os diversos agentes que articula, expressa sua marca na identidade com pessoas e empresas que se comprometem a atuar de maneira efetiva na colaboração por um mundo mais saudável para se habitar, em respeito ao meio ambiente do qual fazem parte e responsabilidade para com as gerações por vir.</p>'), 0, 200);
$facebook_image = htmlentities($root . 'img/' . $foto);



include_once "head.php"; ?>

<body>
	<!-- Inicio Cabeçalho -->
	
	<?php include_once "header.php"; ?>

	<!-- fim cabeçalho -->

	<!-- inicio banner -->

	<section class="container-fluid">
		<div class="row mt-3">
			<div class="col-12 col-md-4">
				<div class="card border-success  card1-home" >
					<div class="card-body">
						<h5 class="card-title">Mapa Interativo</h5>
						<p class="card-text">Você pode ajudar o planeta com uma ação simples - use o mapa interativo do Reeduca Recicla mostrando pontos de reciclagem nas cidades. Funciona de maneira simples: insira seu endereço na caixa de pesquisa e o mapa mostrará pontos de coleta nas proximidades.</p>
						<h5>Saiba onde descartar seus resíduos</h5>
						<p></p>
						<a href="mapa.php" class="btn btn-success btn-card">Acessar o Mapa</a>
					</div>
				</div>
			</div>

			<div class="col-12 col-md-4 ">
				<div class="card border-success  card1-home">
					<div class="card-body">
						<img src="img/imgcardhome.jpg" alt="" class="img-fluid">
						
					</div>
				</div>
			</div>

			<div class="col-12 col-md-4 ">
				<div class="card border-success card1-home" >
					<div class="card-body bg-success text-white">
						<h5 class="card-title">Reeduca Recicla</h5>
						<p class="card-text"></p>
						<p>Acreditamos na capacidade das pessoas e empresas de adotarem escolhas que contribuam para o desenvolvimento de uma sociedade sustentável, com relações de consumo de maior qualidade e práticas ambientalmente responsáveis.</p>
						<p>No portal, o internauta encontra serviços como um Sistema de Busca de postos de coleta para mais de 12 tipos de resíduos</p>
						
					</div>
				</div>
			</div>

			
			
		</div>
		
	</section>
	

	<!-- fim banner -->
	<main class="container-fluid ">
		<!-- inicio reciclagem divulgaçao -->

		<div class="row no-gutters recicla-texto">
			<div class="col-md-6 img-texto">
				<img src="img/porquereciclar.png" class="img-fluid " alt="Por que reciclar?">
			</div>
			<div class="col-md-6 texto-info-home">
				<article>
					<h1 class="titulo-card-home">Por que reciclar ?</h1>
					<p class="texto-card-home">Conforme a população do planeta aumenta, cresce também a quantidade de lixo
						produzido. Porém, ao longo das décadas, foram descobertas novas maneiras de reaproveitar estes
						materiais que iam diretamente para os lixões, como plástico, papel, metais, vidro e madeira. Este
					processo recebe o nome de reciclagem.</p>
					<p class="texto-card-home">Muitos desses componentes, quando não recebem tratamento adequado e não são
						encaminhados para a reciclagem, demoram décadas e até séculos para se decompor. O acúmulo dessas
						substâncias no meio ambiente causa poluição, degradação ambiental e prejudica todo o ecossistema
						terrestre. Além disso, a reciclagem evita o esgotamento de matérias-primas, uma vez que reaproveita
						o material para outros fins, em vez de simplesmente descartá-lo e retirar um novo material da
					natureza.</p>
					<p class="texto-card-home">Além de ser ecológica, a reciclagem é fundamental para a economia. Isso
						porque o setor gera renda a muitas famílias, seja durante a coleta, na linha de produção ou mesmo
						para artesãos. Outra vantagem da reciclagem é a redução no consumo de água e energia elétrica, pois
					gasta-se menos recursos ao reaproveitar os materiais do que a extração.</p>
					<p class="texto-card-home">Vale ressaltar que a reciclagem não se limita apenas ao lixo inorgânico e
						madeira: até mesmo o óleo de cozinha pode ser reciclado e transformado em sabão. Sem contar o lixo
						orgânico, que pode se tornar compostagem (adubo orgânico), fortificando o solo e ajudando a reter
					umidade.</p>
				</article>
			</div>
		</div>
	</main>

	<!-- fim reciclagem divulgação -->

	<main class="container-fluid no-gutters main-pag-home">

		<!-- inicio propaganda loja -->
		<div class="mt-4 mb-4">
			<div class="d-none d-sm-none d-md-block d-lg-block d-xl-block">
				<a href="loja.php" role="button" title="Visite nossa loja virtual - Trabalhamos com produtos feitos de material reciclado.">
					<img class="img-fluid" src="img/bannerloja2.jpg" alt="Visite nossa loja virtual - Trabalhamos com produtos feitos de material reciclado.">
				</a>
			</div>
			<div class="d-block d-sm-block d-md-none d-lg-none d-xl-none">
				<div class="container-fluid">
					<div class="row">
						<div class="col-12">
							<div class="card">
								<img class="card-img-top" src="img/bannerlojaresponsivo.jpg" alt="Card image cap">
								<div class="card-body">
									<h4 class="card-title">Visite nossa loja virtual</h4>
									<p class="card-text">Trabalhamos com produtos feitos de material reciclado.</p>
									<a href="#" class="btn btn-primary">Acessar</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- fim propaganda loja -->

		<!-- inicio parceiros -->
		<div id="carouselExampleControls" class="carousel slide mb-4" data-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img class="d-block w-100" src="img/parceiros1.jpg" alt="Primeiro Slide">
				</div>
				<div class="carousel-item">
					<img class="d-block w-100" src="img/parceiros2.jpg" alt="Segundo Slide">
				</div>

			</div>
			<a class="carousel-control-prev " href="#carouselExampleControls" role="button" data-slide="prev">
				<span class="carousel-control-prev-icon carrousel-icone" aria-hidden="true"></span>
				<span class="sr-only">Anterior</span>
			</a>
			<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Próximo</span>
			</a>
		</div>

		<!-- fim parceiros -->

		<!-- inicio frase -->

		<div class="recycle-feeds d-none d-md-block">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-md-12">
						<div class="recycle-icon fade-in-up ">
							<i class="fa fa-recycle img-circle"></i>
						</div>
						<p id="frase">
							" É tempo de reciclar! "

						</p>
					</div>

				</div>
			</div>
		</div>
		<!-- fim frase -->



	</main>

	<!-- inicio footer -->

	<?php include_once "footer.php"; ?>
