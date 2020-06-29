
import React, { Component } from "react";
import Toolbar from "../../components/toolbar";
import Topbar from "../../components/topbar"; 
import css from "./style.module.css";
import Bottom from "../../components/BottomMenu";
import ProductMenu from "../../components/ProductMenu";
import {Route} from "react-router-dom";
import HomePage from "../HomePage";
import DetailPage from "../DetailPage"
import ProfilePage from "../ProfilePage";
class App extends Component {
  state = {
    SideBar: false,
    ProMenu: false,
  };
  Change = () => {
    this.setState((omnohutga) => {
      return { ProMenu: !omnohutga.ProMenu };
    }); //omnoh utgaaas ni hamaaruulj ashiglaj bga tohioldold ingej ashiglana
  };
  ChangeSidebar = () => {
    this.setState((omnohutga) => {
      return { SideBar: !omnohutga.SideBar };
    }); //omnoh utgaaas ni hamaaruulj ashiglaj bga tohioldold ingej ashiglana
  }
  render() {
  
    return (
      <div>
        <Topbar />
       <Toolbar
          SideBar={this.state.SideBar}
          ChangeSidebar={this.ChangeSidebar}
        />     
        <ProductMenu ProMenu={this.state.ProMenu} Change={this.Change} />
        <ProfilePage/>
      <main className={css.Content}>
        <Route path="/" exact>
         <HomePage/>
    </Route>
  {/*   <Route path="/Product">
        <DetailPage/>
    </Route>*/}
    </main>
    <Bottom />  
      </div>
    );
  }
}


export default App;
