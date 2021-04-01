import React, { Component } from 'react'


class CocktailIngredient extends Component {
    state = {
        arr: null,
        drinkNum: 0,
        cocktail: null,
        cocktailList: null,
        text: "",
        formDetails: [],
        cocktailDetails: "",
        firstCocktail: false,
        lastCocktail: false,
        undefined: ""
      }
      
      handleInput = (event) => {
          // getting the value of the input and assigning to the state
          this.setState({ text: event.target.value });
          this.setState({ingredient: ""})
        };
        handleSubmit = (event) => {
          // stop default form behaviour which is to reload the page
          event.preventDefault();
          this.setState({
            formDetails: [this.state.text],
            text: "",
          });
        };
      cocktailSearch = () => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.text}`)
      .then((res) => res.json())
      .then((data) => { 
        console.log(data)
        if (data.drinks == undefined) {
        this.setState({undefined: true})
      }else{
        this.setState({undefined: false})
        this.setState({cocktailDetails: data.drinks[0]});
        this.setState({arr: data.drinks.length});
        this.setState({cocktail: data.drinks[this.state.drinkNum].strDrink});
        if (this.state.arr === 1) {
          this.setState({firstCocktail: true})
          this.setState({lastCocktail: true})
        }
          else {
            this.setState({firstCocktail: true})
            this.setState({lastCocktail: false})
          }
      }
      })
    }
      cocktailNameSearch = () => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.cocktail}`)
      .then((res) => res.json())
      .then((data) => { 
        this.setState({cocktailDetails: data.drinks[0]});
       }
      )}
    
      nextCocktail = () => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.formDetails}`)
      .then((res) => res.json())
      .then((data) => { 
        this.setState({drinkNum: this.state.drinkNum+1})
        this.setState({cocktailDetails: data.drinks[this.state.drinkNum]});
        this.setState({arr: data.drinks.length});
        this.setState({cocktail: data.drinks[this.state.drinkNum].strDrink});
        this.setState({firstCocktail: false})
    if (this.state.drinkNum === this.state.arr-1) {
      this.setState({lastCocktail: true})
    }
    else {
      this.setState({lastCocktail: false})
    }
       }
      ) }

      prevCocktail = () => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.formDetails}`)
      .then((res) => res.json())
      .then((data) => { 
        this.setState({drinkNum: this.state.drinkNum-1})
        this.setState({cocktailDetails: data.drinks[this.state.drinkNum]});
        this.setState({arr: data.drinks.length});
        this.setState({cocktail: data.drinks[this.state.drinkNum].strDrink});
        this.setState({lastCocktail: false})
    if (this.state.drinkNum === 0) {
      this.setState({firstCocktail: true})
    }
    else {
      this.setState({firstCocktail: false})
    }
      }
      ) }
        
    
        render() {
        return (
            <div>
              <p>Enter ingredient name below</p>
              <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.text}
                onChange={this.handleInput}
              />
              <button onClick={this.cocktailSearch}>Search</button>
              </form>
               {this.state.undefined ? (
        <div>
        No cocktail found
        </div>
    ) : (
      <div>
        <p>{this.state.text}</p>
      </div>
    )}
        

            <div>Number of cocktails in this search: {this.state.arr}</div>
            {this.state.firstCocktail ? (
        <div>
        First cocktail on the list
        </div>
    ) : (
      <div>
        <button onClick={this.prevCocktail}>Previous Cocktail</button>
      </div>
    )}
    {this.state.lastCocktail ? (
        <div>
        last cocktail on the list
        </div>
    ) : (
      <div>
        <button onClick={this.nextCocktail}>Next Cocktail</button>
      </div>
    )}
            <div>{this.state.cocktail}</div>
            <button onClick={this.cocktailNameSearch}>Request Ingredients</button>
            <br/>
        <div>{this.state.cocktailDetails.strAlcoholic}</div>
        <br/>
        <p>Ingredients</p>
        <div>{this.state.cocktailDetails.strMeasure1}</div>
        <div>{this.state.cocktailDetails.strIngredient1}</div>
        <div>{this.state.cocktailDetails.strMeasure2}</div>
        <div>{this.state.cocktailDetails.strIngredient2}</div>
        <div>{this.state.cocktailDetails.strMeasure3}</div>
        <div>{this.state.cocktailDetails.strIngredient3}</div>
        <div>{this.state.cocktailDetails.strMeasure4}</div>
        <div>{this.state.cocktailDetails.strIngredient4}</div>
        <div>{this.state.cocktailDetails.strMeasure5}</div>
        <div>{this.state.cocktailDetails.strIngredient5}</div>
        <div>{this.state.cocktailDetails.strMeasure6}</div>
        <div>{this.state.cocktailDetails.strIngredient6}</div>
        <br/>
        <p>Instructions</p>
        <div>{this.state.cocktailDetails.strInstructions}</div>
        
            <p>Cocktail number: {this.state.drinkNum+1}</p>
            </div>
        )
    }


}    
    export default CocktailIngredient