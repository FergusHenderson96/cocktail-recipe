import React, {Component} from 'react';

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
            <img src = {this.state.cocktail.strDrinkThumb}/>
            <div>Cocktail name: {this.state.cocktail.strDrink}</div>
            <button onClick={this.randomCocktail}>Generate new cocktail</button> 
            <div>{this.state.cocktail.strAlcoholic}</div>
            <br/>
            <p>Ingredients</p>
            <div>{this.state.cocktail.strMeasure1}</div>
            <div>{this.state.cocktail.strIngredient1}</div>
            <div>{this.state.cocktail.strMeasure2}</div>
            <div>{this.state.cocktail.strIngredient2}</div>
            <div>{this.state.cocktail.strMeasure3}</div>
            <div>{this.state.cocktail.strIngredient3}</div>
            <div>{this.state.cocktail.strMeasure4}</div>
            <div>{this.state.cocktail.strIngredient4}</div>
            <div>{this.state.cocktail.strMeasure5}</div>
            <div>{this.state.cocktail.strIngredient5}</div>
            <div>{this.state.cocktail.strMeasure6}</div>
            <div>{this.state.cocktail.strIngredient6}</div>
            <br/>
            <p>Instructions</p>
            <div>{this.state.cocktail.strInstructions}</div>
          </div> 
          
    
        </div>
      );
      }
    }
    
    export default App;
    