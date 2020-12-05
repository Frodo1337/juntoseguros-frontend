import React, {Component} from "react";
import ItemLista from "./ItemLista";
import NovoItemForm from "./NovoItemForm";
import ApiHandler from "../../api.js";
import firebase from "../../conexaodb.js";
import "../../css/styleGeral.css";
import "./style.css";

class Lista extends Component{
  constructor(props){
    super(props);

    this.state = {
      uid: null,
      usuario: null,
      totalTarefas: 0,
      totalTarefasConcluidas: 0,
      //Armazena a response da api
      tarefasAFazer: [],
      tarefasConcluidas: [],
      componenteAFazer: [<div key = "-1">Nenhuma tarefa encontrada</div>],
      componenteConcluida: [<div key = "-1">Nenhuma tarefa concluída</div>],
      displayComponente: null,
      aFazerExibidas: true,
      loading: true
    }

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({uid: user.uid});
        this.setState({usuario: user.email});

        this.fetchTarefas();

        this.setState({loading: false});
      }
      else{
        this.props.history.replace("/");
      }
    });

    this.fetchTarefas = this.fetchTarefas.bind(this);
    this.preventChange = this.preventChange.bind(this);
    this.checkTarefasConcluidas = this.checkTarefasConcluidas.bind(this);
    this.showFormNovoItem = this.showFormNovoItem.bind(this);

  }

  logout(){
    firebase.auth().signOut();
  }

  async fetchTarefas(){
    let response = await ApiHandler.get("/tarefas/todas/" + String(this.state.uid));
    let aFazer = [];
    let concluidas = [];

    //Separa as tarefas que estão a fazer e as concluídas
    for(let key in response.data){
      let tarefa = [key, response.data[key].concluida, response.data[key].tarefa];

      if(response.data[key].concluida === "false"){
        aFazer.push(tarefa);
      }
      else{
        concluidas.push(tarefa);
      }
    }

    this.setState({tarefasAFazer: aFazer});
    this.setState({tarefasConcluidas: concluidas});

    this.carregaLista();
  }

  async preventChange(){
    //Faz com que o estado da checkbox não seja mutável por um clique
    let checkBoxFiltro = await document.getElementById("tarefasConcluidas");
    checkBoxFiltro.checked = await !this.state.aFazerExibidas;
  }

  async checkTarefasConcluidas(){
    let checkBoxFiltro = document.getElementById("tarefasConcluidas");

    //Altera a exibição para tarefas concluídas
    if(this.state.aFazerExibidas){
      await this.setState({aFazerExibidas: !this.state.aFazerExibidas})
    }
    else{
      await this.setState({aFazerExibidas: !this.state.aFazerExibidas})
    }

    checkBoxFiltro.checked = await !this.state.aFazerExibidas;

    this.carregaLista();
  }

  showFormNovoItem(){
    let formNovoItem = document.getElementById("formNovoItem");

    formNovoItem.style.display = "block";
  }

  carregaLista(){
    let aFazer = [];
    let concluidas = [];

    //Armazena nos states os componentes de cada item da lista
    if(this.state.tarefasAFazer.length >= 1){
      for(let i = 0; i < this.state.tarefasAFazer.length; i ++){
        aFazer.push(<div key = {this.state.tarefasAFazer[i][0]}><ItemLista id = {this.state.tarefasAFazer[i][0]}
                                                                           uid = {this.state.uid}
                                                                           tarefa = {this.state.tarefasAFazer[i][2]}
                                                                           fetch = {this.fetchTarefas}/></div>);
      }

      this.setState({componenteAFazer: aFazer});
    }

    if(this.state.tarefasConcluidas.length >= 1){
      for(let i = 0; i < this.state.tarefasConcluidas.length; i ++){
        concluidas.push(<div key = {this.state.tarefasConcluidas[i][0]}><ItemLista id = {this.state.tarefasConcluidas[i][0]}
                                                                                   uid = {this.state.uid}
                                                                                   tarefa = {this.state.tarefasConcluidas[i][2]}
                                                                                   fetch = {this.fetchTarefas}/></div>);
      }

      this.setState({componenteConcluida: concluidas});
    }

    if(this.state.aFazerExibidas){
      //O display pode receber listas com tarefas concluídas ou com a fazer,
      //aqui fazemos ele receber a lista de tarefas a fazer;
      this.setState({displayComponente: aFazer});
    }
    else{
      this.setState({displayComponente: concluidas});
    }
  }

  render(){
    return(
      <div id = "lista">
      {
        this.state.loading === true ?
          <center>
            <div className = "mt-5">
              <span className = "text-dark">
                Carregando, por favor aguarde
              </span>
            </div>
          </center>
        :
        <center>
          <div className = "container mt-5">
            {/*Título to do list*/}
            <div className = "row">
              <div className = "col">
                <h2 className = "text-light font-weight-bold">
                  To Do List de {this.state.usuario}
                </h2>
              </div>
            </div>
            {/*Filtro de tarefas concluídas*/}
            <div className = "row mt-2">
              {/*Opção filtro de somente tarefas concluídas*/}
              <div className = "col text-left">
                <div className = "row">
                  <div className = "col form-check">
                    <input className = "form-check-input" type = "checkbox" id = "tarefasConcluidas" onClick = {this.preventChange}/>
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
                  Total de tarefas a fazer: {this.state.tarefasAFazer.length}
                </span>
                <br/>
                <span className = "text-dark">
                  Total de tarefas concluídas: {this.state.tarefasConcluidas.length}
                </span>
              </div>
            </div>
            {/*Logout*/}
            <div className = "row">
              <div className = "col text-right">
                <button className = "btn btn-danger btn-sm" onClick = {this.logout}>
                  Sair
                </button>
              </div>
            </div>
            {/*Formulário de criação de um novo item da lista*/}
            <div className = "row mt-4">
              <div className = "col">
                <NovoItemForm uid={this.state.uid} fetch={this.fetchTarefas}/>
              </div>
            </div>

            {/*Lista de afarezes*/}
            <div className = "row mt-4">
              <div className = "col">
                {this.state.displayComponente}
              </div>
            </div>
          </div>
        </center>
      }
      </div>
    );
  }
}

export default Lista;
