import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'

import { Header } from "./component/Header";
import {Layout} from "antd";
import {About} from "./component/About";
import "./index.css"
import {Violet} from "./component/products/Violet";


function App() {
  return (
      <Layout>
          <Header/>
          <Router>
              <Switch>
                  <Route path={"/mypage"} component={About} exact/>
                  <Route path={"/mypage/products/violet"} component={Violet}/>
              </Switch>
          </Router>
      </Layout>

  );
}

export default App;
