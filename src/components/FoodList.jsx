import { FoodItem } from "./FoodItem";

export const FoodList = ({ foodData, setFoodId }) => {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem item={food} setFoodId={setFoodId} key={food.id} />
      ))}
    </div>
  );
};
