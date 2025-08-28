import React, {useEffect, useState} from 'react';
import './style.css'; // Importar o pacote das css

//https://sujeitoprogramador.com/rn-api/?api=posts - Api.

function App() {

  // useState - será usada para os estados a serem verificados na página.
  const [nutri, setNutri] = useState([]); 

  // useEffect - será usado para chamar a API quando a página carregar.
  useEffect(() => {

     function loadApi(){

      //fectch('Passar a url') - um modo de chamar url pelo React, por onde não se termina com ';' .
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      fetch(url)
      
      // then - é usado como caso de sucesso, caso de der certo ele chama o then, recebendo uma função anonima.
      .then((r) => r.json())
      .then((json) => {
      
      console.log(json);
      setNutri(json);
      }) 
     }

     loadApi();

  }, [])

  return (
    <div className='container'>
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item) => {
        return(
          <article key={item.id} className='post'>
             <strong className='titulo'>{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className='capa'/>
            <p className='subtitulo'>{item.subtitulo}</p>
            <a className='botao'>Acessar</a>
          </article>
        )
      })}

    </div>
  );
}

export default App;
