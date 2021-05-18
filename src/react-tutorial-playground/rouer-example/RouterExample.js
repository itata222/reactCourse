import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
// import { createBrowserHistory } from 'history';

import './routerExmpleStyles.scss';
import RouterHome from './RouterHome';
import Articles from './Articles';
import RouterHeader from './RouterHeader';
import RouterNotFoundPage from './RouterNotFoundPage';
import Article from './Aritcle';

const RouterExmple = () => (
    <BrowserRouter>
        <RouterHeader />
        <Switch>
            <Route path="/" exact>
                <Redirect to="/home" />
            </Route>
            <Route path="/home" component={ RouterHome } />
            <Route path="/articles" component={ Articles } />
            <Route path="/article/:name" component={ Article } />
            <Route path="*" component={ RouterNotFoundPage } />
        </Switch>
    </BrowserRouter>
);

// export const history = createBrowserHistory();

// const RouterExmple = () => (
//     <Router history={ history }>
//         <RouterHeader />
//         <Switch>
//             <Route path="/" exact>
//                 <Redirect to="/home" />
//             </Route>
//             <Route path="/home" component={ RouterHome } />
//             <Route path="/articles" component={ Articles } />
//             <Route path="/article/:name" component={ Article } />
//             <Route path="*" component={ RouterNotFoundPage } />
//         </Switch>
//     </Router >
// );

export default RouterExmple;
