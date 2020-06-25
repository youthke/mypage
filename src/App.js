import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'

import { Header } from "./component/Header";
import {Layout} from "antd";
import {About} from "./component/About";
import "./index.css"
import {Violet} from "./component/products/Violet";
import {Contact} from "./component/Contact";


function App() {
  return (
      <Layout>
          <Header/>
          <Router basename={process.env.PUBLIC_URL}>
              <Switch>
                  <Route path={"/mypage"} component={About} exact/>
                  <Route path={"/mypage/contact"} component={Contact} exact/>
                  <Route path={"/mypage/products/violet"} component={Violet}/>
              </Switch>
          </Router>
      </Layout>

  );
}

export default App;
