<header>
        <nav class="navbar navbar-light bg-white active shadow p-3 mb-0 ">
            <div class="col-md-4">
                <a class="navbar-brand align-self-start" href="#">
                    <img src="img/logo_lado.png" class="logoMargin" width="200" alt="">
                </a>
            </div>
            <div class="col-md-8">
                <ul class="nav marginHeader justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link active grow efeitoTransicao" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link grow efeitoTransicao" href="sobre.html">Sobre nós</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link grow efeitoTransicao" href="loja.html">Loja</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link grow efeitoTransicao" href="contato.html">Contato</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link grow efeitoTransicao" href="mapa.html">Mapa</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link grow efeitoTransicao" data-toggle="modal" data-target="#exampleModal"
                            data-whatever="@mdo" href="#">Login</a>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="botaoFecharLogin">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group" class="form-inline">
                                <label for="recipient-name" class="col-form-label">Usuário:</label>
                                <input type="text" class="form-control" id="recipient-name">
                                <div class="form-inline">
                                    <input type="checkbox" class="form-control" id="remember-user">
                                    <label class="col-form-label" id="remember-user-text"> Lembrar usuário</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="message-text" class="col-form-label">Senha:</label>
                                <input type="password" class="form-control" id="password"></input>
                                <a href="#">Esqueceu a senha?</a>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <a class="btn btn-danger" id="botaoAbrirCadastro" href="#">Ainda não tem cadastro?</a>
                        <button type="submit" class="btn btn-success" data-dismiss="modal" id="btn-login">Acessar</button>
                    </div>
                </div>
            </div>
		</div>

            <div class="modal fade" id="exampleModalCadastro" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog dialogUsuario" role="document">
                    <div class="modal-content content-usuario">
                        <div class="modal-header headerUsuario" class="bg-success">
                            <h5 class="modal-title">Cadastro de Usuário:</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body bodyUsuario">
                            <form>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Nome completo:</label>
                                    <input type="text" class="form-control" id="recipient-name">
                                </div>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">E-mail:</label>
                                    <input type="email" class="form-control" id="recipient-name"
                                        placeholder="email@email.com.br">
                                </div>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Endereço:</label>
                                    <input type="text" class="form-control" id="recipient-name">
                                </div>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Número:</label>
                                    <input type="number" class="form-control" id="recipient-name">
                                </div>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Complemento:</label>
                                    <input type="text" class="form-control" id="recipient-name">
                                </div>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">CEP:</label>
                                    <input type="number" class="form-control" id="recipient-name">
                                </div>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Cidade:</label>
                                    <input type="text" class="form-control" id="recipient-name">
                                </div>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">UF:</label>
                                    <input type="text" class="form-control" id="recipient-name">
                                </div>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Usuário:</label>
                                    <input type="text" class="form-control" id="recipient-name">
                                </div>
                                <div class="form-group">
                                    <label for="message-text" class="col-form-label">Senha:</label>
                                    <input type="password" class="form-control" id="password"></input>
                                </div>
                                <div class="form-group">
                                    <label for="message-text" class="col-form-label">Repetir senha:</label>
                                    <input type="password" class="form-control" id="password"></input>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer footerUsuario">
                            <button type="submit" class="btn btn-success" id="btn-cadastro-usuario"
                                data-dismiss="modal">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
    </header>
