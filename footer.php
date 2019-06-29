
<div style="max-width: 100%; overflow: hidden;">
	<footer>    
    <nav class="nav nav-fill rodape">
   
        <div class="col-md-2"> 
        <li class="footer-logo-size">
                <img src="img/logo_branco.png" width="200" alt="">
        </li>  
        </div>

        <div class="col-md-9">
              <ul class="nav marginFooter">                  
                  <li class="nav-item" >
                      <a class="nav-link active menu-footer" href="index.html">Home</a>
                      <a class="nav-link active menu-footer" href="sobre.html">Sobre</a>
                      <a class="nav-link active menu-footer" href="loja.html">Loja</a>
                  </li>
                  <li class="nav-item" >
                      <a class="nav-link active menu-footer" href="mapa.html">Mapa</a>
                      <a class="nav-link active menu-footer" href="FAQ.php">FAQ</a> 
                  </li>
                  <li class="nav-item">
                      <a class="nav-link active menu-footer" href="contato.html">Contato</a>
                  </li>

                  <div class="col-md-2 text-primary div-icones" >
                    <ul class="ul-icones-footer ">
                        <li class="nav-link active icones-footer">
                            <a href="https://twitter.com/reeducarecicla" target="_blank">
                                <i class="fa fa-twitter text-white"> </i>   
                            </a>
                        </li>

                        <li class="nav-link active icones-footer">
                            <a href="https://facebook.com/reeducarecicla" target="_blank">
                                <i class="fa fa-facebook text-white"> </i>
                            </a>
                        </li> 
                        <li class=" nav-link active icones-footer">
                            <a href="http://instagram.com/reeducarecicla" target="_blank">
                                <i class="fa fa-instagram text-white"> </i>
                            </a>
                        </li>
                    </ul>
                </div>
                  <li class="nav-item newsletter">
                     <label class="form-control newsletter-footer"> Assine nossa Newsletter!</label>                
                        <div class="input-group newsletter-email">
                             <input class="form-control" type="email" placeholder="email@email.com.br">
                             <span class="input-group-btn "> 
                             <button class="btn btn-success" class="btn-newsletter" type="submit">Assine agora</button>
                          </span>
                        </div>
                  </li>
              </ul>
          </div>
    </nav> 

      <section class="container-fluid" id="foot5">
          <h4 class="text-center" id="footer-copyrights">Copyrights © 2019 ReeducaRecicla</h4>
      </section>
</footer>
</div>

	<?php if (strpos($_SERVER['HTTP_USER_AGENT'], "Google Page Speed Insights") === false): ?>
		<!-- O que tiver aqui dentro o page speed do Google não consegue ver -->
	<?php endif ?>

	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/style.css">
	<link href="css/font-awesome.min.css" rel="stylesheet">

	<link href="css/dropdown.min.css" rel="stylesheet" type="text/css" />
	<link href="css/jquery.fancybox.min.css" rel="stylesheet" type="text/css" />
	<link href="css/stylesa361.css?ver=2.3" rel="stylesheet" type="text/css" />
	<link href="css/beta-popup.css" rel="stylesheet" type="text/css" />
	


	<!-- <script src="js/jquery.js"></script> -->
	<script src="https://code.jquery.com/jquery-3.4.0.min.js"></script>
	<script src="js/bootstrap.bundle.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/recicla.min.js"></script>
	

	<?php if (strpos($_SERVER['SCRIPT_NAME'], 'mapa.php')): ?>
		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDottVHFaZukoZo_EvVv-jxbhOCpC1LMeY&callback=initMap"></script>
<script src="js/gmaps.js"></script> <!-- plugin para google maps api -->

	<script>

					//////////////////////////////////////////////////////////////////////////////////////////
					// Inicia o mapa informando o elemento, as coordenadas iniciais e algumas opções extras //
					//////////////////////////////////////////////////////////////////////////////////////////
					var zoomInicial = 5;
					var latitudeInicial = -20.347000;
					var longitudeInicial = -40.294000;
					var mapa = new gMaps('#map',latitudeInicial,longitudeInicial, { zoom : zoomInicial, scrollwheel : false, pretoebranco : false });

					/**
					 * Função a ser chamada sempre que houver necessidade de mudar os marcadores no mapa, ou seja, quando alguém mudar quais marcadores deseja ver
					 */
					 function atualizarMapa() {

						////////////////////////////////////////////////////////////////////////////////////////////////////////////
						// Percorre os ícones de objetos descartáveis para identificar quais estão ativos e obter o id de cada um //
						////////////////////////////////////////////////////////////////////////////////////////////////////////////
						let categoria = [];
						$('.trash_type .type_item a').each(function(){
							if( $(this).is('.active') ) categoria.push($(this).data('id'));
						});

						/////////////////////////
						// pega o id da cidade //
						/////////////////////////
						let cidade = $('button.botao-pesquisa span.label').data('id');

						//////////////////////////////////////////////////////////////
						// remove os marcadores do mapa antes de adicionar os novos //
						//////////////////////////////////////////////////////////////
						mapa.removerMarcadores();

						/**
						 * faz uma solicitação ajax para obter um json com os novos marcadores
						 * @param  [url] passa a url do arquivo que retorna o json com os parâmetros da cidade e categorias selecionadas
						 */
						 $.getJSON(`marcadores.php?cidade=${cidade}&categoria=${categoria}`).then(function(response){
							// por ser uma requisição com Promise, é necessário que o        👆 then()
							// tratamento do retorn o seja feito no método then()
							// que é executado quando a requisição é bem sucedida
							window.marcadores = response;

							///////////////////////////////////////////////////////////////////
							// se não encontrar nenhum marcador, reduz o zoom para o inicial //
							///////////////////////////////////////////////////////////////////
							if( window.marcadores.length == 0 ) {
								mapa.map.setZoom(zoomInicial);
								mapa.centralizarMapa(latitudeInicial, longitudeInicial);
							}

							else {
								for (var i = window.marcadores.length - 1; i >= 0; i--) {
									///////////////////////////////////////////////////////////////////////////////////////////////
									// para cada iteração com o vetor, chama a função addMarker() para inserir os pontos no mapa //
									///////////////////////////////////////////////////////////////////////////////////////////////
									mapa.addMarker({
										latitude : window.marcadores[i].latitude,
										longitude : window.marcadores[i].longitude,
										title : window.marcadores[i].nome,
										//////////////////////////////////////////////////////////////////////////////
										// 👇 aqui montamos o html que será exibido quando o usuário clicar no ponto //
										//////////////////////////////////////////////////////////////////////////////
										html : `
										<p><b>${window.marcadores[i].nome}</b></p>
										<p>${window.marcadores[i].endereco}</p>
										<p>${window.marcadores[i].telefone}</p>
										<p><a href="https://maps.google.com?saddr=Current+Location&daddr=${window.marcadores[i].latitude},${window.marcadores[i].longitude}" target="_blank" title="Clique nesse link para abrir o GPS">Abrir GPS</a></p>
										`,
									});
								}
								///////////////////////////////////////////////////////////////////////////////////////////////
								// por fim chama essa função para centralizar o mapa com base nos marcadores recém colocados //
								///////////////////////////////////////////////////////////////////////////////////////////////
								mapa.zoomParaAjustar();
							}
						});
						}

					/**
					 * função responsável por popular a lista de cidades com base em um json vindo por ajax
					 */
					 function atualizarCidades() {
					 	for (var i = 0; i < window.cidades.length; i++) {
					 		$('ul.lista-cidades').append(
					 			$('<li>').append(
					 				$('<a>')
					 				.text(window.cidades[i].nome)
									////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
									// é importante armazenar também a imagem e id para ser possível alterar a imagem ao mudar a cidade e para o ajax que obtém os marcadores //
									////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
									.data('imagem', window.cidades[i].imagem)
									.data('id', window.cidades[i].id)
									)
					 			);
					 	}
					 }

					 //////////////////////////////////////////////////////////////////////////////////////////////////////
					 // adiciona função de click nos ícones para adicionar uma classe de active neles e atualizar o mapa //
					 //////////////////////////////////////////////////////////////////////////////////////////////////////
					 $('.trash_type .type_item a').on('click', function(event) {
					 	event.preventDefault();
					 	if( this.className == '' ) $(this).addClass('active');
					 	else $(this).removeClass('active');
					 	atualizarMapa();
					 });

					 ///////////////////////////////////////////////////////////////////////
					 // faz uma consulta ajax para obter um json com os nomes das cidades //
					 ///////////////////////////////////////////////////////////////////////
					 $.getJSON('cidades.php').then(function(response){
					 	window.cidades = response;
					 	atualizarCidades();
					 });

					 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
					 // adiciona uma função de click nas cidades para atualizar o nome, a foto e o id para ser pego posteriormente na função atualizarMapa() //
					 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
					 $('ul.lista-cidades').on('click', 'li a', function(){
					 	$('button.botao-pesquisa span.label')
					 	.text( $(this).text() )
					 	.data('id', $(this).data('id')); /*👈 importante para a função atualizarMapa()*/
					 	$('.city_head .photo img').attr('src',  $(this).data('imagem'));
					 });

					 // rola direto pro mapa
					 let tamanhoHeader = 0;
					 jQuery('header nav').each(function(){
					 	if(jQuery(this).css('display') != 'none') tamanhoHeader = jQuery(this).outerHeight();
					 });
					 jQuery('html, body').animate({
				        'scroll-top': tamanhoHeader+'px'
				    }, 1000);
					</script>
	<?php endif ?>

</body>
</html>