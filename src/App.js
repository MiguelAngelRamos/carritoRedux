import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CarritoProductos from './components/CarritoProductos'

import HomeProductos from './components/HomeProductos'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeProductos} />
        <Route exact path="/carrito" component={CarritoProductos} />
      </Switch>
    </Provider>
    </BrowserRouter>
  )
}

export default App
