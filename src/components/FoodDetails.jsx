import { useEffect, useState } from "react";

export const FoodDetails = ({ foodId }) => {
  const url = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const apiKey = "d02179917e2b4cb2b73cb95c55c2760a";
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(`${url}?apiKey=${apiKey}`);
      const data = await res.json();
      console.log(data);
      setRecipe(data);
      setIsLoading(false);
    }
    fetchRecipe();
  }, [foodId]);
  return (
    <div className={`card`}>
      <img src={recipe.image} className="card-img-top" />
      <div className="card-body">
        <h3 className="card-title">{recipe.title}</h3>
        <p className="card-text">
          <b>Preparation time:</b> {recipe.readyInMinutes} minutes <br />
          {recipe.vegetarian ? "🥕 Vegetarian" : "🥩 Non-vegetarian"} <br />
          Serves {recipe.servings} {recipe.servings > 1 ? "people" : "person"}{" "}
          at a time <br />
          {recipe.vegan ? "Vegan" : "Non-vegan"} <br />
          Price per serving: ${recipe.pricePerServing / 100}
        </p>
        <div>
          <h4>Ingredients:</h4>
          <ul>
            {recipe.extendedIngredients.map((item) => (
              <li>{item.original}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Instructions:</h4>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            recipe.analyzedInstructions[0].steps.map((step) => (
              <div key={step.number}>
                <b>Step {step.number}:</b> {step.step}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
