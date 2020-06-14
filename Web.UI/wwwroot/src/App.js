import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import history from './services/history';
import Loading from './components/controls/Loading';
import './app.scss';

const Landing = lazy(() => import('./components/Landing'));

const App = () => {
    return (
        <div className="app">
            <main className="smc-main">
                <Router history={history}>
                    <Suspense fallback={<Loading />}>
                        <Switch>
                                <Route exact path='/' component={Landing} />
                        </Switch>
                    </Suspense>
                </Router>
            </main>
        </div>
    );
}

export default App;
