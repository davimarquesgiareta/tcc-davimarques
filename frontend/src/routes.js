import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from './Context/AuthContext';

import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import MyInfluencers from './pages/MyInfluencers';
import MeetInfluencers from './pages/MeetInfluencers';
import Influencer from './pages/Influencer'

function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/" component={Login} />
      <CustomRoute exact path="/login" component={Login} />
      <CustomRoute isPrivate exact path="/profile" component={Profile} />
      <CustomRoute isPrivate exact path="/meusinfluencers" component={MyInfluencers} />
      <CustomRoute isPrivate exact path="/influencers" component={MeetInfluencers} />
      <CustomRoute isPrivate exact path="/influencer/:email" component={Influencer} />
      <CustomRoute exact path="/register" component={Register} />
    </Switch>
  );
}