import React, { Component } from 'react';
import Topbar from '../../components/topbar';
import Toolbar from '../../components/toolbar';
class App extends Component{
  render(){
  return (
    <div>
      <Topbar/>
      <Toolbar/>
      <div class="test  "></div>
    </div>
  );
  }
}

export default App;
