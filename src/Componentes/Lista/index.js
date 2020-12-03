import React, {Component} from "react";
import ItemLista from "./ItemLista";
import NovoItemForm from "./NovoItemForm";
import database from "../../conexaodb.js";
import Sessao from "../../Sessao/sessao.js";
import "../../css/styleGeral.css";
import "./style.css";

class Lista extends Component{
  constructor(props){
    super(props);

    this.state = {
      totalTarefas: 0,
      totalTarefasConcluidas: 0,
      listaAfazeres: ""
    }

    this.checkTarefasConcluidas = this.checkTarefasConcluidas.bind(this);
    this.showFormNovoItem = this.showFormNovoItem.bind(this);
  }

  checkTarefasConcluidas(){
    let checkBoxFiltro = document.getElementById("tarefasConcluidas");

    //Inverte o estado da checkbox
    if(checkBoxFiltro.checked){
      checkBoxFiltro.checked = !checkBoxFiltro.checked;
    }
    else{
      checkBoxFiltro.checked = !checkBoxFiltro.checked;
    }
  }

  showFormNovoItem(){
    let formNovoItem = document.getElementById("formNovoItem");

    formNovoItem.style.display = "block";
  }

  render(){
    let listaAfazeres = [];

    for(let i = 0; i < 4; i ++){
      listaAfazeres.push(<div key={i}><ItemLista tarefa="Comprar pão porra"/></div>);
    }

    return(
      <div>
        <center>
          <div className = "container mt-5">
            {/*Título to do list*/}
            <div className = "row">
              <div className = "col">
                <h2 className = "text-light font-weight-bold">
                  To Do List de "nome do usuário vai aqui"
                </h2>
              </div>
            </div>

            {/*Filtro de tarefas concluídas*/}
            <div className = "row mt-2">
              {/*Opção filtro de somente tarefas concluídas*/}
              <div className = "col text-left">
                <div className = "row">
                  <div className = "col form-check">
                    <input className = "form-check-input" type = "checkbox" id = "tarefasConcluidas"/>
                    <span className = "text-dark textoPointer textoNaoSelecionavel" onClick = {this.checkTarefasConcluidas}>
                      Mostar somente tarefas concluídas
                    </span>
                  </div>
                </div>
                {/*Criação de uma nova tarefa*/}
                <div className = "row">
                  <div className = "col pl-0">
                    <button className = "btn btn-primary btn-sm" onClick = {this.showFormNovoItem}>
                      Adicionar Tarefa
                    </button>
                  </div>
                </div>
              </div>
              {/*Contagem total de tarefas e contagem de tarefas concluídas*/}
              <div className = "col text-right">
                <span className = "text-dark">
                  Total de tarefas: {this.state.totalTarefas}
                </span>
                <br/>
                <span className = "text-dark">
                  Total de tarefas concluídas: {this.state.totalTarefasConcluidas}/{this.state.totalTarefas}
                </span>
              </div>
            </div>

            {/*Formulário de criação de um novo item da lista*/}
            <div className = "row mt-4">
              <div className = "col">
                <NovoItemForm/>
              </div>
            </div>

            {/*Lista de afarezes*/}
            <div className = "row mt-4">
              <div className = "col">
                {listaAfazeres}
              </div>
            </div>
          </div>
        </center>
      </div>
    );
  }
}

export default Lista;
