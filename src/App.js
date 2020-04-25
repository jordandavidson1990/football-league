import React from "react";
import { Header, Table, Fixtures } from "./components";
import "./App.css";
import { createProvider } from "./components/context/context";

const Provider = createProvider({});
function App() {
  return (
    <Provider>
      <div className="App">
        <Header />
        <Table />
        <Fixtures />
      </div>
    </Provider>
  );
}

export default App;
