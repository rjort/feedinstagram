import React from 'react';
import Header from './src/components/Header';
import Stories from './src/components/Stories';
import Feed from './src/pages/Feed';
import Menu from './src/components/Menu';
import Login from './src/pages/Login';


const App = () => {
  return(
    <React.Fragment>
     <Feed  />       
    </React.Fragment>
  );
};

export default App;