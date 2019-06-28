<!DOCTYPE html>
<html lang="pt">

<?php include_once "head.php"; ?>

<body>

	<?php include_once "header.php"; ?>


	<div style="position: relative;">
		<div class="panel city_panel">
			<div class="city_head">
				<div class="photo">
					<a href="#" class="fit_size" data-tooltip="visao geral">
						<img src="img/id_1.jpg" alt="" />
					</a>
				</div>
				<div class="main_cityinfo">
					<div class="dropdown">
						<button class="btn btn-dark dropdown-toggle botao-pesquisa" type="button" data-toggle="dropdown"><span class="label" data-id="1">São Paulo</span><span class="caret"></span></button>
						<ul class="dropdown-menu lista-cidades">
							<li><a>Selecione a cidade</a></li>
						</ul>
					</div>
				</div>
				<a href="#" class="opensearch"></a>

				<!-- <div class="search_block"><form id="search_left" action="#"><input type="text" placeholder="Qual a sua cidade?" name="address" /><input type="submit" value="OK" style="display:none;" /><i class="ico icomarker"></i><i data-tooltip="Minha Localizacao" class="ico icohome"></i></form></div> -->
			</div>
			<div class="panel_body">
				<div class="panel_body_wrap">
					<div class="trash_type">


						<button class="btn-primary d-block d-sm-none" type="button" data-toggle="collapse" data-target="#seletorDeCategoria" style="font-size: 17px; width: 100%; text-align: center;">Escolher categoria</button>

						<div class="collapse navbar-collapse d-sm-block " id="seletorDeCategoria">
							<div class="trash_type_title">ESCOLHA O MATERIAL A SER RECICLADO:</div>

							<div class="row">
								<div class="type_item col-3">
									<a href="#" data-id="1" style="background-image: url(img/trash/trash1.png);"></a>
									<span class="custom-tooltip">Papel</span>
								</div>
								<div class="type_item col-3">
									<a href="#" data-id="2" style="background-image: url(img/trash/trash2.png);"></a>
									<span class="custom-tooltip">Vidro</span>
								</div>
								<div class="type_item col-3">
									<a href="#" data-id="3" style="background-image: url(img/trash/trash3.png);"></a>
									<span class="custom-tooltip">Plástico</span>
								</div>
								<div class="type_item col-3">
									<a href="#" data-id="4" style="background-image: url(img/trash/trash4.png);"></a>
									<span class="custom-tooltip">Metal</span>
								</div>
								<div class="type_item col-3">
									<a href="#" data-id="5" style="background-image: url(img/trash/trash5.png);"></a>
									<span class="custom-tooltip">Roupas</span>
								</div>
								<div class="type_item col-3">
									<a href="#" data-id="6" style="background-image: url(img/trash/trash6.png);"></a>
									<span class="custom-tooltip">Celular</span>
								</div>
								<div class="type_item col-3">
									<a href="#" data-id="7" style="background-image: url(img/trash/trash7.png);"></a>
									<span class="custom-tooltip">Resíduos Perigosos</span>
								</div>
								<div class="type_item col-3">
									<a href="#" data-id="8" style="background-image: url(img/trash/trash8.png);"></a>
									<span class="custom-tooltip">Baterias</span>
								</div>
								<div class="type_item col-3">
									<a href="#" data-id="9" style="background-image: url(img/trash/trash9.png);"></a>
									<span class="custom-tooltip">Lampadas</span>
								</div>
								<div class="type_item col-3">
									<a href="#" data-id="10" style="background-image: url(img/trash/trash10.png);"></a>
									<span class="custom-tooltip">Eletrodomésticos</span>
								</div>
								<div class="type_item col-3">
									<a href="#" data-id="11" style="background-image: url(img/trash/trash11.png);"></a>
									<span class="custom-tooltip">Tetra Pack</span>
								</div>
							</div>
							<button class="btn-primary d-block d-sm-none" type="button" data-toggle="collapse" data-target="#seletorDeCategoria" style="font-size: 17px; width: 100%; text-align: center;"><i class="fa fa-chevron-up"></i></button>
						</div>





					</div>
				</div>	
			</div>
			<div class="clearfix"></div>
		</div>
	</div>

	<div id="map"></div>

	<?php include_once "footer.php"; ?>