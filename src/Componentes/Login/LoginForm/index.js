import React, {Component} from "react";
import firebase from "../../../conexaodb.js";
import "../../../css/styleGeral.css";
import "./style.css";

class LoginForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      email: "",
      senha: ""
    };

    this.setEmail = this.setEmail.bind(this);
    this.setSenha = this.setSenha.bind(this);
    this.showCadastro = this.showCadastro.bind(this);
    this.login = this.login.bind(this);
  }

  setEmail(e){
    this.setState({email: e.target.value});
  }

  setSenha(e){
    this.setState({senha: e.target.value});
  }

  showCadastro(){
    let formLogin = document.getElementById("login");
    let formCadastro = document.getElementById("cadastro");

    //Esconde o formulário de login e mostra o de cadastro
    formLogin.style.display = "none";
    formCadastro.style.display = "block";
  }

  login(e){
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha);
    e.preventDefault();
  }

  render(){
    return(
      <div>
        <div className = "container formLogin" id = "login">
          <form onSubmit={this.login}>
            {/*Campo de usuário*/}
            <div className = "row">
              <div className = "col">
                <div className = "form-group">
                  <span className = "float-left">
                    Endereço de e-mail:
                  </span>
                  <input className = "form-control form-control-sm campoTransparenteComBordas" type = "email" onChange = {this.setEmail} required/>
                </div>
              </div>
            </div>
            {/*Campo de senha*/}
            <div className = "row">
              <div className = "col">
                <span className = "float-left">
                  Senha:
                </span>
                <input className = "form-control form-control-sm campoTransparenteComBordas" type = "password" onChange = {this.setSenha} required/>
              </div>
            </div>
            {/*Submit do formulário*/}
            <div className = "row mt-2">
              <div className = "col">
                <center>
                  <input className = "btn btn-success btn-sm" type = "submit" value = "Login"/>
                </center>
              </div>
            </div>
          </form>

          {/*Link para cadastro*/}
          <div className = "row mt-2">
            <div className = "col">
              <span>
                Não possui cadastro?
              </span>
              <br/>
              <span className = "textoEstiloLink" onClick = {this.showCadastro}>
                Cadastre-se aqui
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
