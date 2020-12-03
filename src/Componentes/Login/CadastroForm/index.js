import React, {Component} from "react";
import "../../../css/styleGeral.css";
import "./style.css";

class CadastroForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      login: "",
      senha: "",
      confSenha: ""
    };

    this.setLogin = this.setLogin.bind(this);
    this.setSenha = this.setSenha.bind(this);
    this.setConfSenha = this.setConfSenha.bind(this);
    this.cadastrar = this.cadastrar.bind(this);
    this.showLogin = this.showLogin.bind(this);
    this.cancelar = this.cancelar.bind(this);
  }

  setLogin(e){
    this.setState({login: e.target.value});
  }

  setSenha(e){
    this.setState({senha: e.target.value});
  }

  setConfSenha(e){
    this.setState({confSenha: e.target.value});
  }

  cadastrar(e){
    let nomeUsuario = this.state.login;
    let senha = this.state.senha;
    let senhaConf = this.state.confSenha;
    //Regex para validar os inputs
    const regexNomeUsuario = /\s{1,}/;

    //Nome de usuário vazio, informa o usuário que é inválido
    if(nomeUsuario === ""){
      window.alert("Nome de usuário inválido: usuário vazio");
    }
    //Nome de usuário com espaços, informa o usuário que é inválido
    else if(regexNomeUsuario.test(nomeUsuario)){
      window.alert("Nome de usuário inválido: nome contem espaços");
    }
    //Senhas diferentes, informam o usuário sobre elas
    else if(senha !== senhaConf){
      window.alert("As senhas não conferem");
    }
    else{
      window.alert("Usuário cadastrado com sucesso!");
    }

    e.preventDefault();
  }

  showLogin(){
    let formLogin = document.getElementById("login");
    let formCadastro = document.getElementById("cadastro");

    //Mostra o formulário de login e esconde o de cadastro
    formLogin.style.display = "block";
    formCadastro.style.display = "none";
  }

  cancelar(){
    //Remove os dados salvos digitados pelo usuário no formulário de cadastro
    this.setState({login: ""});
    this.setState({senha: ""});
    this.setState({confSenha: ""});

    this.showLogin();
  }

  render(){
    return(
      <div>
        <div className = "container formCadastro" id = "cadastro">
          <form onSubmit={this.cadastrar}>
            {/*Campo de usuário*/}
            <div className = "row">
              <div className = "col">
                <span className = "float-left">
                  Nome de usuário:
                </span>
                <input className = "form-control form-control-sm campoTransparenteComBordas" type = "text" onChange = {this.setLogin}/>
              </div>
            </div>
            {/*Campo de senha*/}
            <div className = "row">
              <div className = "col">
                <span className = "float-left">
                  Senha:
                </span>
                <input className = "form-control form-control-sm campoTransparenteComBordas" type = "password" onChange = {this.setSenha}/>
              </div>
            </div>
            {/*Campo de confirmação de senha*/}
            <div className = "row">
              <div className = "col">
                <span className = "float-left">
                  Confirme a Senha:
                </span>
                <input className = "form-control form-control-sm campoTransparenteComBordas" type = "password" onChange = {this.setConfSenha}/>
              </div>
            </div>
            {/*Submit do formulário de cadastro e cancelamento*/}
            <div className = "row mt-2">
              <div className = "col">
                <center>
                  <button className = "btn btn-success btn-sm" onClick = {this.cadastrar}>Cadastrar</button>
                </center>
              </div>
            </div>
          </form>
            <div className = "row mt-2">
              <div className = "col">
                <center>
                  <button className = "btn btn-danger btn-sm" onClick = {this.cancelar}>Cancelar</button>
                </center>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default CadastroForm;
