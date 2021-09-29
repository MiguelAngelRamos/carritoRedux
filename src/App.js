import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import { CarritoContext } from './context/CarritoContext';

import CarritoProductos from './components/CarritoProductos'
import HomeProductos from './components/HomeProductos'
import Navbar from './components/Navbar'

const App = () => {
  const [carritoCompra, setCarritoCompra] = useState(0);
  return (
    <CarritoContext.Provider value={{
      carritoCompra,
      setCarritoCompra
    }}>
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomeProductos} />
          <Route exact path="/carrito" component={CarritoProductos} />
        </Switch>
      </Provider>
      </BrowserRouter>
    </CarritoContext.Provider>
 
  )
}

export default App
