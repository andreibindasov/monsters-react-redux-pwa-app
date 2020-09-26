import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import ErrorBoundry from './components/ErrorBoundry';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/searchbox/searchbox.component';

import { setSearchField, requestMonsters } from './actions'

const mapStateToProps = state => {
  return{
    searchField: state.searchMonsters.searchField,
    monsters: state.requestMonsters.monsters,
    isPending: state.requestMonsters.isPending,
    error: state.requestMonsters.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestMonsters: () => dispatch(requestMonsters())
  }
}

class App extends Component {
  // constructor(){
  //   super();
    
  //   this.state={
  //     monsters: [],
  //     // searchField:''
  //   };
  // this.handleChange = this.handleChange.bind(this);
    
  // }

    
  componentDidMount(){
          
      // fetch('https://jsonplaceholder.typicode.com/users')
      //   .then(res => res.json())
      //   .then(users=> this.setState({monsters:users}));
      this.props.onRequestMonsters()
  }

  // handleChange = e => {
  //   this.setState({searchField: e.target.value})
  // }

  render(){
    // const {monsters} = this.state;
    const {searchField, handleChange, monsters, isPending} = this.props
    const filteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return isPending ? 
      <h1> LOADING... </h1> :
      (
        <div className="App">
            <h1>MONSTERS ROLODEX</h1>
              <SearchBox
                placeholder='search monsters'
                handleChange={handleChange}
              />
            <hr></hr> 
            <ErrorBoundry>
                <CardList monsters={filteredMonsters}/>
            </ErrorBoundry>
        </div>
        
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
