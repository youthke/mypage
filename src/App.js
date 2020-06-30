import React from 'react';
import {HashRouter as Router,Route, Switch} from 'react-router-dom'

import { Header } from "./component/Header";
import {Layout} from "antd";
import {About} from "./component/About";
import "./index.css"
import {Violet} from "./component/products/Violet";
import {Contact} from "./component/Contact";
import {Questack} from "./component/products/Questack";


function App() {
  return (
      <Layout>
          <Router>
              <Header/>
              <Switch>
                  <Route path={"/contact"} component={Contact}/>
                  <Route path={"/products/violet"} component={Violet}/>
                  <Route path={"/products/questack"} component={Questack}/>
                  <Route path={"/"} component={About}/>
              </Switch>
          </Router>
      </Layout>

  );
}

export default App;
