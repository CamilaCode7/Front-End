import React, { Component }from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    }
  }

    fetchCharacters = async () => {
      // recebendo o resultado da API dentro do estado 
      const response = await fetch('https://rickandmortyapi.com/api/character')
      const result = await response.json()
      this.setState({
        characters: result.results,
      })
    }

    componentDidMount() {
      this.fetchCharacters();
    }
    
  render() {
    const { characters } = this.state
    return(
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        {/* fazer uma desestruturação n estado e fazer um map para interar o array e renderiza na tela
        outro detalhe é que o uso da key deve ser identificador único! tipo um ID lembra Camila. */}
        <div className="body">
          {
            characters.map(({ name, image, gender, species, location }) => {
              // desestruturei name e image de dentro do array characters.
              // por isso não precisa de colocar characters.name ou então characters.image, porque ja esta chamando no map!
              return (
                <div className="container">
                  <h3>{name}</h3>
                  <img src={image} alt={name}/>
                  <p>{gender}</p>
                  <p>{species}</p>
                  <p>{location.name}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}


export default App;