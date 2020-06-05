import React from 'react';
import { HashRouter } from 'react-router-dom';
import routes from './routes';
import Header from './Components/Header/Header';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        {routes}
      </div>
    </HashRouter>
  );
}

const mapStateToProps = reduxState => reduxState

export default App; 
