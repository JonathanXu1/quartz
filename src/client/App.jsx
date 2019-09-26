import React from "react";
import { withRouter, Route, Redirect, NavLink, Switch } from 'react-router-dom';

import * as ROUTES from './utils/routes.js'

import { AuthConsumer } from './layers/Auth.jsx';

import DashboardPage from './pages/Dashboard.jsx';
import LoginPage from './pages/Login.jsx';

class App extends React.Component {

    render() {
       return (
         <div>
             <AuthConsumer>
                 {({authenticated, login}) => (
                     <> 
                        <div>
                            {
                                authenticated ? <Redirect to={ROUTES.DASHBOARD} /> : <Redirect to={ROUTES.LOGIN} />
                            }
                        </div>
                        <Switch>
                            <Route exact path={ROUTES.DASHBOARD} component={DashboardPage} />
                            <Route path={ROUTES.LOGIN} component={() => <LoginPage login={login}/>} />
                        </Switch>
                    </>
                )}
            </AuthConsumer>
         </div>
       )
    }
}

export default App;