<!DOCTYPE html>
<html lang="pt">

<?php include_once "head.php"; ?>

<body>
    
<?php include_once "header.php"; ?>

<div class="row no-gutters">
    <!-- Banner topo -->

    <div class="card bg-dark text-white card-banner">
  <img src="img/bannercontato1900x320.jpg" class="card-img" alt="...">
  <div class="card-img-overlay">
    
    
  </div>
</div>
    <!-- <div class="col-md-12 contato-banner">
        <img src="img/bannercontato1900.png" class="img-fluid">
    </div> -->
    <!-- Fim banner -->
</div>

<div class="container-fluid">

    <div class="row">

        <!-- inicio Formulario -->
        <div class="col-md-8">
            <div class="user-info-settings">
                <h4 class="text-success">Contato</h4>
                <form action="index.html" class="user-info-setting-form">
                    <div class="form-group">
                        <label class="text-label">Nome</label>
                        <input type="text" class="form-control" placeholder="Nome">
                    </div>
                    <div class="form-group">
                        <label class="text-label">Email</label>
                        <input type="email" class="form-control" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <label class="text-label">Mensagem</label>
                        <textarea class="form-control contato" cols="10" rows="5"></textarea>
                    </div>

                    <div class="submit-buttons mb-5">
                        <button type="submit" class="btn btn-card btn-success">Enviar</button>
                        <button type="reset" class="btn btn-card btn-primary">Limpar</button>
                    </div>
                </form>
            </div>
            <!-- Fim Formulario -->

            <!-- Imagem Abaixo formulario -->
            <div class="col-md-8 col-xs-12" id="imgform">
                <img src="img/familiareciclado.jpg" class="img-fluid">
            </div>
        </div>
        <!-- fim imagem -->


        <!-- Inicio dados contato -->
        <div class="col-md-4 col-sm-6 col-xs-12 dadosContato"> 

            <div class="card">
                <div class="card-body user-details-contact text-center ">
                    <div class="user-details-image mb-3">
                        <img class="rounded-circle" src="img/1.jpg" alt="image">
                    </div>
                    <div class="user-intro">
                        <h4 class="text-success card-intro-title mb-0">Reeduca Recicla</h4>
                        <p><small>@reeducarecicla</small></p>
                        <p>Reeduca Recicla é um projeto em constante desenvolvimento, cujo intuito é facilitar a busca por pontos de coleta   adequados ao descarte dos resíduos. Conheça o projeto e compartilhe sua ideias com nossa equipe!</p>
                    </div>
                    <div class="contact-addresses">
                        <ul class="contact-address-list">
                            <li class="email">
                                <h5><i class="fa fa-envelope text-success"></i> Email</h5>
                                <p>contato@reeducarecicla.com</p>
                            </li>
                            <li class="phone">
                                <h5><i class="fa fa-phone text-success"></i> Telefone</h5>
                                <p>(11)99999-1010</p>
                            </li>
                            <li class="address">
                                <h5><i class="fa fa-map text-success" aria-hidden="true"></i> Endereço</h5>
                                <p>São Paulo, SP</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        <!-- fim dados contato -->
    </div>

    <!-- inicio frase -->

    
        
        <!-- fim frase -->

    </div>
</div>
<div class="recycle-feeds">
    <div class="container no-gutters">
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

<!-- inicio footer -->

<?php include_once "footer.php"; ?>

<!-- fim footer -->



<script src="js/jquery.js"></script>
<script src="js/bootstrap.bundle.js"></script>
<script src="js/bootstrap.bundle.min.js"></script>
<script src="js/bootstrap.min.js"></script>




</body>

</html>