import SearchBar from "../SearchBar/SearchBar";
import React from "react";

import style from "./Nav.module.css"

class Nav extends React.Component{
    constructor (props){
        super(props);

    }

render () {
    return (
        <div className={style.contenedor}>
        <SearchBar onSearch={this.props.onSearch}/>
        </div>
    )   
}
}

export default Nav;
//function nav (props){
//return (
   // <div>
    //    <SearchBar onSearch={props.onSearch}/>
  //  </div>
    

//)};
