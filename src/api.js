import Axios from "axios";

class ApiHandler{
  constructor(){
    this.url = "http://minhatodolist.ddns.net:5000";
    //this.url = "http://127.0.0.1:5000";
  }

  async get(params){
    let response = await Axios.get(this.url + params);

    return response;
  }

  async post(params){
    let response = await Axios.post(this.url + params);

    return response;
  }

  async delete(params){
    let response = await Axios.delete(this.url + params);

    return response;
  }

  async put(params){
    let response = await Axios.put(this.url + params);

    return response;
  }
}

export default new ApiHandler();
