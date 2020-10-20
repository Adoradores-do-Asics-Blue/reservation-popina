import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Login from './pages/login/index'

const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/cadastrar" component={() => <h1>SignUp</h1>} />
        <Route path="/principal" component={() => <h1>App</h1>} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
  
  export default Routes;