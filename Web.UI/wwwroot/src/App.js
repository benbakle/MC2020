import React, { lazy, Suspense } from 'react';
import './app.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Controls, Pages } from './components';

const { Loading, JYBLoading } = Controls;
//const { Landing } = Pages;

const Landing = lazy(() => import('./components/Pages/Landing'));

const App = () => {
    return (
        <div className="app">
            <main className="smc-main">
                <Router>
                    <Suspense fallback={<Loading />}>
                        <Switch>
                            <Route exact path='/loading'><Loading /></Route>
                            <Route exact path='/jyb-loading'><JYBLoading /></Route>
                            <Route exact path='/'><Landing /></Route>
                        </Switch>
                    </Suspense>
                </Router>
            </main>
        </div >
    );
}

export default App;
