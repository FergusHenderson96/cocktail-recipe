import React, {Component} from 'react';
import CocktailName from './components/CocktailName';
import CocktailIngredient from './components/CocktailIngredient';
import RandomCocktail from './components/RandomCocktail';
import './App.css'
  
class App extends Component{

state = {
  random: true,
  name: true,
  ingredient: true,
}

nameCocktail = () => {
  this.setState({random: true});
  this.setState({name: false});
  this.setState({ingredient: true});
 }

 ingredientCocktail = () => {
  this.setState({random: true});
  this.setState({name: true});
  this.setState({ingredient: false});
 }

randomCocktail = () => {
  this.setState({random: false});
  this.setState({name: true});
  this.setState({ingredient: true});
 }

  render () {
  return (
  <div className="body">
    <h1 className="heading">Cocktail Index</h1> 

     <div className="options">
    <button className="button" onClick={this.randomCocktail}>Random</button>   
    {this.state.random ? (
      <div>Generate a random cocktail</div>
    ) : (
      <div>
        <RandomCocktail/>
      </div>
    )}
      </div>
<br/>
      <div className="options">
    <button className="button" onClick={this.nameCocktail}>Name</button>  
    {this.state.name ? (
        <div>Search for a cocktail by name</div>
      ) : (
        <div>
          <CocktailName/>
        </div>
      )}
      </div>
<br/>
      <div className="options">
    <button className="button" onClick={this.ingredientCocktail}>Ingredient</button> 
      {this.state.ingredient ? (
        <div>Search for a cocktail by ingredient</div>
      ) : (
        <div>
          <CocktailIngredient/>
        </div>
      )}
      </div>
      </div>
   ) }

}

export default App;
