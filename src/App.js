import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ApplyList } from './components/ApplyList';
import { Apply } from './components/Apply';
import { SignUp } from './components/SignUp';
import { Login } from './components/Login';
import { Employe } from './components/Employe';

import './custom.css'


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/employe' component={Employe} />
        <Route exact path='/employe' component={Employe} />
        <Route path='/apply' component={Apply} />
        <Route path='/applylist' component={ApplyList} />
      </Layout>
    );
  }
}
