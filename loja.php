<!DOCTYPE html>
<html lang="en">

<?php include_once "head.php" ?>

<body>

    <?php include_once "headerLoja.php"?>

    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-verde shadow p-3 mb-0">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav marginSubMenu">
                    <li class="nav-item active ">
                        <a class="nav-link letraSubMenu" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item dropdown ">
                        <a class="nav-link dropdown-toggle letraSubMenu" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categorias
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item letraSubMenu" href="#">Roupas</a>
                            <a class="dropdown-item letraSubMenu" href="#">Móveis</a>
                            <a class="dropdown-item letraSubMenu" href="#">Decoração</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item letraSubMenu" href="#">Diversos</a>
                        </div>
                    </li>
                </ul>
            </div>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search">
                <button class="btn btn-dark my-2 my-sm-0" type="submit">Buscar</button>
            </form>
        </nav>
    </div>
    <div id="lojaCategorias" class="secao mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-12 mt-3">
                    <div class="lojaCategorias">
                        <ul class="categoriasEcomm">
                            <li>
                                <div class="liSemBola">
                                    <img src="img/simbolo-de-reciclagem.png" class="sustLogoLoja" width="50%" alt="">
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h3 class="decoracaoTxtLoja"><a class="grow" href="">ROUPAS</a></h3>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h3 class="decoracaoTxtLoja"><a class="grow" href="">MÓVEIS</a></h3>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h3 class="decoracaoTxtLoja"><a class="grow" href="">DECORAÇÃO</a></h3>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h3 class="decoracaoTxtLoja"><a class="grow" href="">DIVERSOS</a></h3>
                                </div>
                            </li>
                            <li>
                                <div class="liSemBola">
                                    <img src="img/simbolo-de-reciclagem.png" class="sustLogoLoja" width="50%" alt="">
                                </div>
                            </li>
                        </ul>
                        <h2 class="text-uppercase decoracaoH2Loja">Para você que deseja ser sustentável</h2>
                        <p class=" decoracaoH2Loja">Veja os produtos das nossas lojas parceiras!</p>
                        <br>
                        <a class="btn btn-success" href="#">Ver produtos</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-12 mt-3 mb-3">
                <h1 class="h1LojaHome">PRODUTOS</h1>
                <div class="linha"></div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-3 mt-3 mb-3">
                <div class="card" style="width: 15rem;">
                    <img src="img/prod1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Eco Tanque 80 litros Casológica</h5>
                        <p class="card-text">O Eco Tanque permite que voc&ecirc; reutilize a &aacute;gua que seria
                            desperdi&ccedil;ada pela m&aacute;quina de lavar.</p>
                        <p class="card-text precoLoja">R$177,00</p>
                        <a href="internaProduto.html" class="btn btn-success">Comprar</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mt-3 mb-3">
                <div class="card" style="width: 15rem;">
                    <img src="img/prod3.jpg" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">Luminária solar de parede</h5>
                        <p class="card-text">O Eco Tanque permite que voc&ecirc; reutilize a &aacute;gua que seria
                            desperdi&ccedil;ada pela m&aacute;quina de lavar.</p>
                        <p class="card-text precoLoja">R$177,00</p>
                        <a href="internaProduto.html" class="btn btn-success">Comprar</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mt-3 mb-3">
                <div class="card" style="width: 15rem;">
                    <img src="img/prod2.jpg" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">Reservatório de óleo vegetal</h5>
                        <p class="card-text">O Eco Tanque permite que voc&ecirc; reutilize a &aacute;gua que seria
                            desperdi&ccedil;ada pela m&aacute;quina de lavar.</p>
                        <p class="card-text precoLoja">R$177,00</p>
                        <a href="internaProduto.html" class="btn btn-success">Comprar</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mt-3 mb-3">
                <div class="card" style="width: 15rem;">
                    <img src="img/prod4.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Vaso coletor de água da chuva</h5>
                        <p class="card-text">O Eco Tanque permite que voc&ecirc; reutilize a &aacute;gua que seria
                            desperdi&ccedil;ada pela m&aacute;quina de lavar.</p>
                        <p class="card-text precoLoja">R$177,00</p>
                        <a href="internaProduto.html" class="btn btn-success">Comprar</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3 mt-3 mb-3">
                <div class="card" style="width: 15rem;">
                    <img src="img/prod5.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Canudo ecológico</h5>
                        <p class="card-text ">O Eco Tanque permite que voc&ecirc; reutilize a &aacute;gua que seria
                            desperdi&ccedil;ada pela m&aacute;quina de lavar.</p>
                        <p class="card-text precoLoja">R$177,00</p>
                        <br>
                        <a href="internaProduto.html" class="btn btn-success">Comprar</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mt-3 mb-3">
                <div class="card" style="width: 15rem;">
                    <img src="img/prod6.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Carregador solar portátil</h5>
                        <p class="card-text">O Eco Tanque permite que voc&ecirc; reutilize a &aacute;gua que seria
                            desperdi&ccedil;ada pela m&aacute;quina de lavar.</p>
                        <p class="card-text precoLoja">R$177,00</p>
                        <a href="internaProduto.html" class="btn btn-success">Comprar</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mt-3 mb-3">
                <div class="card" style="width: 15rem;">
                    <img src="img/prod7.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Detergente multiuso biodegradável</h5>
                        <p class="card-text ">O Eco Tanque permite que voc&ecirc; reutilize a &aacute;gua que seria
                            desperdi&ccedil;ada pela m&aacute;quina de lavar.</p>
                        <p class="card-text precoLoja">R$177,00</p>
                        <a href="internaProduto.html" class="btn btn-success">Comprar</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mt-3 mb-5">
                <div class="card" style="width: 15rem;">
                    <img src="img/prod8.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Tênis Adidas</h5>
                        <p class="card-text">Tênis Adidas feito inteiramente de materiais reciclados.</p>
                        <br>
                        <br>
                        <p class="card-text precoLoja">R$177,00</p>
                        <a href="internaProduto.html" class="btn btn-success">Comprar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <?php include_once "footer.php"?>

    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.bundle.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
   
</body>

</html>