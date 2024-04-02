import { useEffect, useState } from "react";

export default function Recipes() {
    const [recipes, setRecipes] = useState([])
    
    useEffect(()=>{
        fetch('https://api.sampleapis.com/recipes/recipes')
        .then((response)=> response.json()) 
        .then((data) => setRecipes(data))

        return ()=> {console.log('Unmounted')}
    }, [])
  
    return (
    <div className="recipe-container">

        {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe">
                <h2 onClick={(e)=>document.title=e.target.innerText}>{recipe.title}</h2>
                <p><strong>Description:</strong> {recipe.description}</p>
                <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                <p><strong>Directions:</strong> {recipe.directions}</p>
            </div>
            
        ))}
      
    </div>
  );
}
