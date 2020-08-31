import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

import Landing from '../pages/Landing';
import TeacherList from '../pages/TeacherList';
import TeacherForm from '../pages/TeacherForm';

const Routes:React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
      
      <Route path="/landing" component={Landing} isPrivate />
      <Route path="/study" component={TeacherList} isPrivate />
      <Route path="/give-classes" component={TeacherForm} isPrivate />
    </Switch>
  )
}

export default Routes;