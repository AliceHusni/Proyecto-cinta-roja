import React from 'react';
import Congelados from './paginas/Congelados';
import NavBar from './componentes/NavBar';
import Botanas from './paginas/Botanas';
import PostresJalot from './paginas/PostresJalot';
import SobreNosotros from './paginas/SobreNosotros';
import Comidalista from './paginas/Comidalista';
import Contacto from './paginas/Contacto';
import Portada from './paginas/Portada';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <NavBar />
    
      <Switch>
        
        <Route exact path = "/Contacto" component={Contacto}></Route>
        <Route exact path = "/Sobrenosotros" component={SobreNosotros}></Route>
        <Route exact path = "/Congelados" component={Congelados}></Route>
        <Route exact path = "/Botanas" component={Botanas}></Route>
        <Route exact path = "/Comidalista" component={Comidalista}></Route>
        <Route exact path = "/PostresJalot" component={PostresJalot}></Route>
        <Route exact path = "/Portada" component={Portada}></Route>

      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
