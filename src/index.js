import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory }  from 'react-router';
import App from './App';
import Portfolio from './Portfolio';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/portfolio" component={Portfolio} />
  </Router>
), document.getElementById('identification'));

console.log(`


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


                                .----.______
                                |ian        |
                                |    ___________
                                |   /          /   
                                |  /          /
                                | /          /
                                |/__________/

    ▄▀▀▄    ▄▀▀▄  ▄▀▀█▄▄▄▄  ▄▀▀▀▀▄     ▄▀▄▄▄▄   ▄▀▀▀▀▄   ▄▀▀▄ ▄▀▄  ▄▀▀█▄▄▄▄ 
   █   █    ▐  █ ▐  ▄▀   ▐ █    █     █ █    ▌ █      █ █  █ ▀  █ ▐  ▄▀   ▐ 
   ▐  █        █   █▄▄▄▄▄  ▐    █     ▐ █      █      █ ▐  █    █   █▄▄▄▄▄  
     █   ▄    █    █    ▌      █        █      ▀▄    ▄▀   █    █    █    ▌  
      ▀▄▀ ▀▄ ▄▀   ▄▀▄▄▄▄     ▄▀▄▄▄▄▄▄▀ ▄▀▄▄▄▄▀   ▀▀▀▀   ▄▀   ▄▀    ▄▀▄▄▄▄   
            ▀     █    ▐     █        █     ▐           █    █     █    ▐   
                  ▐          ▐        ▐                 ▐    ▐     ▐     


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;



`);
