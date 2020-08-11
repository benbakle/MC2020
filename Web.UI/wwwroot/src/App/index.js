import React, { lazy, Suspense } from 'react';
import './app.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Loading, JYBLoading } from 'controls';

//const { Landing } = Pages;

const Landing = lazy(() => import('screens/Landing'));

const App = () => {
    return (
        <div className="app">
            <main className="smc-main">
                <Router>
                    <Suspense fallback={<Loading />}>
                        <Switch>
                            <Route exact path='/'><Landing /></Route>
                        </Switch>
                    </Suspense>
                </Router>
            </main>
        </div >
    );
}

export default App;
