import React from "react";

//Importar a opção de navegar por links
import {Link} from 'react-router-dom';

function Home(){
  return(
    <div>
      <h1>Página Inicial</h1>
      <span>José Caetano</span>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede.</p>
      <br/>
      <span><Link to="/sobre">Sobre a Empresa</Link></span>
      <br/>
      <span><Link to="/Contacto">Entra em Contacto</Link></span>
    </div>
  )
}

export default Home;