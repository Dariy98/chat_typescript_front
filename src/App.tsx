import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <div className="App">
            <Route path={["/login", "/"]} render={() => <LoginPage />} exact />
            <Route path="/chat" render={() => <ChatPage />} exact />
          </div>
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
