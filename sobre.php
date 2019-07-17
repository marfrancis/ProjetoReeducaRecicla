<!DOCTYPE html>
<html lang="pt">
<?php
$root = 'http://localhost/projetoreeducarecicla/';
$foto = 'salveo%20planeta.png';

$title = $facebook_title = "Sobre Nós";
$keywords = 'recicla,palavras,chave,separadas,por,virgula';
$description = $facebook_description = substr(strip_tags('<p>A Reeduca, por sua atitude empresarial e pela qualidade das relações que busca desenvolver com os diversos agentes que articula, expressa sua marca na identidade com pessoas e empresas que se comprometem a atuar de maneira efetiva na colaboração por um mundo mais saudável para se habitar, em respeito ao meio ambiente do qual fazem parte e responsabilidade para com as gerações por vir.</p>'), 0, 200);
$facebook_image = htmlentities($root . 'img/' . $foto);
include_once "head.php";
?>
<body>
    <?php
    include_once "header.php"
    ?>
    <section class="container-fluid">
        <div class="row sobre">
            <div class="col-md-6 foto">
               <img src="img/salveoplaneta.jpg" class="img-fluid desktop" alt="Salve o planeta">
               <img src="img/salveoplanetaresponsivo.jpg" class="img-fluid responsivo" alt="Salve o planeta">
            </div>
            
            <article class="col-md-6 texto">
                <h1 id="margem">Quem <span class="color-title">Somos</span></h1>
                <h3 class="space"><span class="color-title">Visão</span></h3>
                <p>A Reeduca, por sua atitude empresarial e pela qualidade das relações que busca desenvolver com os
                    diversos agentes que articula, expressa sua marca na identidade com pessoas e empresas que se
                    comprometem a atuar de maneira efetiva na colaboração por um mundo mais saudável para se habitar, em
                respeito ao meio ambiente do qual fazem parte e responsabilidade para com as gerações por vir.</p>
                <h3 class="space"><span class="color-title">Missão</span></h3>
                <p>Nosso compromisso é criar e oferecer conteúdo, serviços e produtos que contribuam para a ampliação da
                    consciência dos indivíduos em suas ações de consumo rumo a uma relação mais equilibrada e harmoniosa
                    consigo mesmo, com o outro e com o meio ambiente do qual fazem parte através do fomento a
                    iniciativas orientadas a minimizar e eliminar as substâncias sabidamente nocivas à saúde dos
                sistemas biológicos e ecológicos em sua preservação.</p>
                <h3 class="space"><span class="color-title">Valores</span></h3>
                <p>Acreditamos na capacidade das pessoas e empresas para, na dinâmica de suas relações, promoverem
                    alternativas e adotarem escolhas que contribuam para o desenvolvimento de uma sociedade sustentável,
                    alcançável através do desenvolvimento de um padrão de consumo - legítimo anseio de todo ser humano –
                    de maior qualidade, sobretudo através de práticas que contribuam para a uma conduta ambientalmente
                responsável.</p>
            </article>
        </div>
    </section>
    <div class="recycle-feeds">
        <div class="container no-gutters">
            <div class="row">
                <div class="col-xs-12 col-md-12">
                    <div class="recycle-icon fade-in-up ">
                        <i class="fa fa-recycle img-circle"></i>
                    </div>
                    <p id="frase">
                        "Recicle sempre, para um mundo melhor"

                    </p>
                </div>

            </div>
        </div>
    </div>

    <!-- inicio footer -->
    <?php include_once "footer.php" ?>