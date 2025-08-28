import React from "react";

import {Link} from 'react-router-dom';

function Contacto(){

    return(
        <div>
            <h1>Entra em Contacto</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede.</p>
            <form>
                <label>Nome</label><br/>
                <input type="text" placeholder="Digite seu nome aqui"/><br/>
                <label>Email</label><br/>
                <input type="email" placeholder="exemplo@sou.com"/><br/>
                <label>Telefone</label><br/>
                <input type="text" placeholder="999 999 999"/><br/><br/>
                <input type="submit" value="Enviar"/>
            </form>
            <br/>
            <span><Link to="/">Página Principal</Link></span>
            <br/>
            <span><Link to="/sobre">Sobre a Empresa</Link></span>
        </div>
    )
}

export default Contacto;