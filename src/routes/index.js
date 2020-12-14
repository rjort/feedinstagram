import React, { useContext } from 'react';
import ApolloAuthContext from '../contexts/apolloAuth';
import AppRoutes from './appRoutes';
import AuthRoutes from './authRoutes';

import Loading from '../components/Loading'

const Routes = () => {
  const { loggedIn, loading } = useContext(ApolloAuthContext);

  if (loading) {
    return (
      <Loading />
    )
  }

  return loggedIn ? <AppRoutes /> : <AuthRoutes />
}

export default Routes;