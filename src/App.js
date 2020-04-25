import React, { useEffect, useState } from "react";
import { Header, Table, Fixtures } from "./components";
import "./App.css";
import { createProvider } from "./components/context/context";
import requests from "./components/api/requests";

const Provider = createProvider({});
function App() {
  const [folks, setFolks] = useState([]);

  useEffect(() => {
    requests.getPlayers().then((players) => setFolks(players));
  }, []);
  return (
    <Provider>
      <div className="App">
        <Header />
        <Table folks={folks} />
        <Fixtures players={folks} folks={folks} />
      </div>
    </Provider>
  );
}

export default App;
