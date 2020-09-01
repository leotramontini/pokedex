import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import PokemonPerfil from './pages/PokemonPerfil'

function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Landing} />
      <Route path='/:id' component={PokemonPerfil} />
    </BrowserRouter>
  )
}

export default Routes