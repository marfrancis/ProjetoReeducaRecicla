<!DOCTYPE html>
<html lang="en">
<?php include_once "head.php" ?>
<body>
<?php include_once "header.php"; ?>
<form>
<div class="container cadastro">
<div class="form-row">
    <div class="form-group col-md-6">
      <label for="nameCadastro">Nome</label>
      <input type="text" class="form-control" id="nameCadastro" placeholder="Nome" style="font-style:italic">
    </div>
    <div class="form-group col-md-6">
      <label for="sobrenomeCadastro">Sobrenome</label>
      <input type="text" class="form-control" id="cadastroSobrenome" placeholder="Sobrenome" style="font-style:italic">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="emailCadastro">Email</label>
      <input type="email" class="form-control" id="emailCadastro" placeholder="Email" style="font-style:italic">
    </div>
    <div class="form-group col-md-6">
      <label for="inputCriarSenha">Criar Senha</label>
      <input type="password" class="form-control" id="inputCriarSenha" placeholder="Senha" style="font-style:italic">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-3">
      <label for="inputCEP">CEP</label>
      <input type="text" class="form-control" id="inputCEP" placeholder="Seu CEP" style="font-style:italic">
    </div>
   
    <div class="form-group col-md-9">
    <label for="cadastroEndereco">Endereço</label>
    <input type="text" class="form-control" id="cadastroEndereco" placeholder="Endereço" style="font-style:italic">
    </div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-4">
    <label for="cadastroNumero">Número</label>
    <input type="number" class="form-control" id="cadastroNumero" placeholder="número" style="font-style:italic">
  </div>
  <div class="form-group col-md-4">
    <label for="cadastroComplemento">Complemento</label>
    <input type="text" class="form-control" id="cadastroComplemento" placeholder="apto, bloco" style="font-style:italic">
  </div>
  <div class="form-group col-md-4">
    <label for="cadastroBairro">Bairro</label>
    <input type="text" class="form-control" id="cadastroBairro" placeholder="Bairro" style="font-style:italic">
  </div>
</div>
  <div class="form-row">
  <div class="form-group col-md-6">
      <label for="inputEstado">Estado</label>
      <select id="inputEstado" class="form-control">
        <option selected>Selecione</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputCidade">Cidade</label>
      <select id="inputCidade" class="form-control">
        <option selected>Selecione</option>
        <option>...</option>
      </select>
    </div>
    
    
  </div>
  <button type="submit" class="btn btn-secpndary">Finalizar cadastro!</button>
  </div>
</form>
<?php include_once "footer.php"?>

    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.bundle.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
</body>
</html>