import React, {Component} from 'react';
import '.././App.css'

class App extends Component{

    state = {
      cocktail: ""
    }
    
    randomCocktail = () => {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then((res) => res.json())
    .then((data) => { 
      this.setState({cocktail: data.drinks[0]});
      console.log(this.state.cocktail)
     }
    )}
    
      render () {
      return (
        <div>
        <h1>Random Cocktail Generator:</h1> 
          <div>
            <img className="image" src = {this.state.cocktail.strDrinkThumb}/>
            <p>Cocktail name: {this.state.cocktail.strDrink}</p>
            <button className="button" onClick={this.randomCocktail}>Generate new cocktail</button> 
            <p>{this.state.cocktail.strAlcoholic}</p>
            <br/>
            <p>Ingredients: {this.state.cocktail.strMeasure1}</p>
            <p>{this.state.cocktail.strIngredient1}</p>
            <p>{this.state.cocktail.strMeasure2}</p>
            <p>{this.state.cocktail.strIngredient2}</p>
            <p>{this.state.cocktail.strMeasure3}</p>
            <p>{this.state.cocktail.strIngredient3}</p>
            <p>{this.state.cocktail.strMeasure4}</p>
            <p>{this.state.cocktail.strIngredient4}</p>
            <p>{this.state.cocktail.strMeasure5}</p>
            <p>{this.state.cocktail.strIngredient5}</p>
            <p>{this.state.cocktail.strMeasure6}</p>
            <p>{this.state.cocktail.strIngredient6}</p>
            <br/>
            <p>Instructions: {this.state.cocktail.strInstructions}</p>
          </div> 
          
    
        </div>
      );
      }
    }
    
    export default App;
    