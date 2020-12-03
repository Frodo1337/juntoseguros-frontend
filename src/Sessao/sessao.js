import React from "react";

class Sessao{
  constructor(){
    this.state = {
      logged: false
    };
  }

  login(){
    this.setState({logged: true});
  }

  logout(){
    this.setState({logged: false});
  }

  isLogged(){
    return this.state.logged;
  }
}

export default new Sessao();
