import React from 'react';
import { Header } from "./component/Header";
import {Layout} from "antd";
import {About} from "./component/About";
import "./index.css"


function App() {
  return (
      <Layout>
      <Header/>
      <About/>
      </Layout>
  );
}

export default App;
