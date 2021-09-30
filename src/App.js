import React, { Component } from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

    // this.handleChange = this.handleChange.bind(this) with arrow function on line 25 we don't need this anymore
  }

  
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({ monsters: users}))
}

handleChange = (e) => {
   this.setState({ searchField: e.target.value } ) 
    } 

  render() {
    const { monsters, searchField } = this.state;
    // codul de mai sus este ca si cum am scrie 
    // const monsters = this.state.monsters
    // const searchField = this.state.monsters
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
        <div className="App">
          <h1> Monsters Rolodex</h1>
        <SearchBox 
        placeholder='search monsters' 
        handleChange={ this.handleChange }>
          
        </SearchBox>
        
        <CardList monsters= { filteredMonsters}></CardList>
        </div>
      );
    }
    
    
  }

export default App;