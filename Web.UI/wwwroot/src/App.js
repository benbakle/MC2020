import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from './components/controls/Loading';
import './app.scss';

const Landing = lazy(() => import('./components/Landing'));

const App = () => {
    return (
        <div className="app">
            <main className="smc-main">
                <Router>
                    <Suspense fallback={<Loading />}>
                        <Switch>
                            <Route  exact path='/loading'><Loading /></Route>
                            <Route  exact path='/'><Landing /></Route>
                        </Switch>
                    </Suspense>
                </Router>
            </main>
        </div >
    );
}

export default App;
