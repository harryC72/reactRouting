import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Header from './Header';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import Featured from './Featured';

const App = () => (
  <BrowserRouter>
  <div className="container">
  <Header />
  <Switch>
  <Route exact path="/teachers" component={Teachers}/>
  <Route path="/teachers/:name/:topic" component={Featured} />
  <Route path="/courses" component={Courses}/>
  <Route  exact path="/" component={Home}/>
  <Route path="/about" render={ () => <About title="about"/> }/>
  <Route component={NotFound} />
  </Switch> 
  </div>
  </BrowserRouter>
)
export default App;