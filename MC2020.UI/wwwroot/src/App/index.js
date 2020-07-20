import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Loading, JYBLoading } from 'controls';
import './__.scss';

const Landing = lazy(() => import('pages/Landing'));

const App = () => {
    return (
        <main className="money-clip-app" aria-label="Money Clip App">
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
    );
}

export default App;
