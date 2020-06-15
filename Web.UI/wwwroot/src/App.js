import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Controls } from './components';
import './app.scss';

const { Loading } = Controls;
const Landing = lazy(() => import('./components/Pages/Landing'));

const App = () => {
    return (
        <div className="app">
            <main className="smc-main">
                <Router>
                    <Suspense fallback={<Loading />}>
                        <Switch>
                            <Route exact path='/loading'><Loading /></Route>
                            <Route exact path='/'><Landing /></Route>
                        </Switch>
                    </Suspense>
                </Router>
            </main>
        </div >
    );
}

export default App;
