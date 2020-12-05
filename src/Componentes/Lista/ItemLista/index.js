import React, {Component} from "react";
import ApiHandler from "../../../api.js";
import "../../../css/styleGeral.css";
import "./style.css";

class ItemLista extends Component{
  constructor(props){
    super(props);

    this.state = {
      render: true
    };

    this.hideTarefa = this.hideTarefa.bind(this);
    this.marcaComoConcluida = this.marcaComoConcluida.bind(this);
    this.exclui = this.exclui.bind(this);
  }

  hideTarefa(){
    this.setState({render: false});
  }

  async marcaComoConcluida(){
    await ApiHandler.put("/tarefas/conclui/" + String(this.props.uid) + "&" + String(this.props.id));
    await this.props.fetch();
    //Esconde a tarefa da tela, ela continua na lista de tarefas não feitas armazenada
    //localmente até que seja feita uma sincronização com a base de dados, isso acontece
    //depois dela ser excluída da base de dados
    this.hideTarefa();
  }

  async exclui(){
    await ApiHandler.delete("/tarefas/deleta/" + String(this.props.uid) + "&" + String(this.props.id));
    await this.props.fetch();
    //Esconde a tarefa da tela, ela continua na lista de tarefas não feitas armazenada
    //localmente até que seja feita uma sincronização com a base de dados, isso acontece
    //depois dela ser excluída da base de dados
    await this.hideTarefa();
  }

  render(){
    return(
      <div id = {this.props.id}>
        {this.state.render ?
        <center>
          <div className = "container border">
            <div className = "row">
              {/*Descrição da tarefa*/}
              <div className = "col col-sm text-left">
                <span className = "text-dark align-middle">
                  {this.props.tarefa}
                </span>
              </div>
              {/*Botão para marcar tarefa como concluída e botão para deletar a tarefa*/}
              <div className = "col col-sm col-sm-2 text-right">
                <button className = "btn btn-success btn-sm" onClick = {this.marcaComoConcluida}>
                  ✓
                </button>
                <button className = "btn btn-danger btn-sm" onClick = {this.exclui}>
                  X
                </button>
              </div>
            </div>
          </div>
        </center>
        :null}
      </div>
    );
  }
}

export default ItemLista;
