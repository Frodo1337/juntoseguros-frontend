import React, {Component} from "react";
import "../../../css/styleGeral.css";
import "./style.css";

class ItemLista extends Component{
  constructor(props){
    super(props);

    this.marcaComoConcluida = this.marcaComoConcluida.bind(this);
    this.exclui = this.exclui.bind(this);
  }

  marcaComoConcluida(){

  }

  exclui(){

  }


  render(){
    return(
      <div>
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
                <button className = "btn btn-success btn-sm">
                  ✓
                </button>
                <button className = "btn btn-danger btn-sm">
                  X
                </button>
              </div>
            </div>
          </div>
        </center>
      </div>
    );
  }
}

export default ItemLista;
