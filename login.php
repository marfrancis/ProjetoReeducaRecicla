<!DOCTYPE html>
<html lang="pt">
<?php
$root = 'http://localhost/projetoreeducarecicla/';
$foto = 'salveo%20planeta.png';


$keywords = 'recicla,palavras,chave,separadas,por,virgula';
$description = $facebook_description = substr(strip_tags('<p>A Reeduca, por sua atitude empresarial e pela qualidade das relações que busca desenvolver com os diversos agentes que articula, expressa sua marca na identidade com pessoas e empresas que se comprometem a atuar de maneira efetiva na colaboração por um mundo mais saudável para se habitar, em respeito ao meio ambiente do qual fazem parte e responsabilidade para com as gerações por vir.</p>'), 0, 200);
$facebook_image = htmlentities($root . 'img/' . $foto);
include_once "head.php";
?>
<body>

<?php include_once "header.php"; ?>
    <div class="container-fluid paginaLogin col-sm-12">
      <div class="jumbotron col-md-4 m-5 col-12 m-0" style="width:30%">
         <div class = "container">
            <h2 class="display-4">Login</h2>
               <form>
                      <div class="form-group loginUser">
                            <label for="loginUsuario">Usuário:</label>
                            <input type="text" class="form-control" id="loginUsuario" aria-describedby="emailHelp" placeholder="Nome usuário" style="font-style:italic">
                            <div class="form-inline float-right">
                                <input type="checkbox" class="form-control col-2" id="remember-user">
                                <label class="form-label" id="remember-user-text"> Lembrar usuário</label>
                            </div>
                      </div>
                      <div class="form-group loginSenha">
                          
                            <label for="loginSenha">Senha:</label>
                            <input type="password" class="form-control" id="loginSenha" placeholder="senha" style="font-style:italic">
                            <a class="esqueceuSenha float-right" href="cadastro.php" >Esqueceu a senha?</a>
                          
                      </div>      
                            <button type="submit" class="btn btn-success">Acessar</button>
                </form>
           </div>
      </div>
    </div>  
   
      <?php include_once "footer.php";?>

</body>

</html>