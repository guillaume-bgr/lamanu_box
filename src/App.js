import Diapo from './components/Diapo';
import Boxes from './pages/Boxes';
import Calculator from './pages/Calculator';
import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app w-100">
          <Header /> 
            <main>
              <Switch>
                <Route path="/" exact component={Diapo}/>
                <Route path="/boxes" exact component={Boxes}/>
                <Route path="/calculator" exact component={Calculator}/>
              </Switch>
            </main>
        </div>
      </BrowserRouter> 
    </>
  )
}

export default App;
