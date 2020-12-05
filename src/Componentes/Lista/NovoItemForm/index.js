import React, {Component} from "react";
import ApiHandler from "../../../api.js";
import "../../../css/styleGeral.css";
import "./style.css";

class NovoItemForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      tarefa: ""
    }

    this.setTarefa = this.setTarefa.bind(this);
    this.criarNovoItem = this.criarNovoItem.bind(this);
    this.hideFormNovoItem = this.hideFormNovoItem.bind(this);
  }

  setTarefa(e){
    this.setState({tarefa: e.target.value});
  }

  async criarNovoItem(){
    let novaTarefa = this.state.tarefa;

    //Tarefa vazia, notifica o usuário
    if(novaTarefa === ""){
      window.alert("Tarefa em branco");
    }
    else{
      await ApiHandler.post("/tarefas/nova/" + this.props.uid + "&" + novaTarefa);
      await this.props.fetch()
      //Limpa a barra de input
      document.getElementById("inputTarefa").value = "";
    }
  }

  hideFormNovoItem(){
    let formNovoItem = document.getElementById("formNovoItem");
    let inputTarefa = document.getElementById("inputTarefa");

    //"Deleta" a tarefa escrita no formulário
    this.setState({tarefa: ""});
    inputTarefa.value = "";
    formNovoItem.style.display = "none";
  }

  render(){
    return(
      <div className = "formNovoItemLista" id = "formNovoItem">
        <div className = "container">
          <div className = "row">
            <div className = "col col-sm-1 mt-1">
              <span className = "text-dark align-middle">
                Tarefa
              </span>
            </div>
            <div className = "col col-sm">
              <input className = "form-control" type = "text" id = "inputTarefa" onChange = {this.setTarefa}/>
            </div>
            <div className = "col col-sm-1 mt-1">
              <button className = "btn btn-success btn-sm" onClick = {this.criarNovoItem}>
                Adicionar
              </button>
            </div>
            <div className = "col col-sm-1 mt-1">
              <button className = "btn btn-danger btn-sm" onClick = {this.hideFormNovoItem}>
                Parar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NovoItemForm;
