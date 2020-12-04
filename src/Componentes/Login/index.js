import React, {Component} from "react";
import LoginForm from "./LoginForm";
import CadastroForm from "./CadastroForm";
import firebase from "../../conexaodb.js";
import firebaseSingle from "../../conexaodbSingle.js"
import "../../css/styleGeral.css";
import "./style.css";

class Login extends Component{
  constructor(props){
    super(props);

    firebaseSingle.auth().onAuthStateChanged((user) => {
      if(user){
        this.props.history.replace("/lista");
      }
    });
  }

  render(){
    return(
      <div>
        <center>
          <div className = "container mt-5">
            {/*Título to do list*/}
            <div className = "row">
              <div className = "col">
                <h2 className = "text-light font-weight-bold">
                  To Do List
                </h2>
              </div>
            </div>

            {/*Formulário de cadastro*/}
            <div className = "row">
              <div className = "col">
                <CadastroForm/>
              </div>
            </div>

            {/*Formulário de login*/}
            <div className = "row">
              <div className = "col">
                <LoginForm/>
              </div>
            </div>
          </div>

        </center>
      </div>
    );
  }
}

export default Login;
