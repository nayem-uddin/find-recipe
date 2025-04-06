import styles from "./stylesheets/fooditem.module.css";
export const FoodItem = ({ item, setFoodId }) => {
  function showDetails() {
    setFoodId(item.id);
  }
  return (
    <div className={`card text-center ${styles.itemContainer}`}>
      <img src={item.image} alt={item.title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <button className="btn btn-primary" onClick={showDetails}>
          View recipe
        </button>
      </div>
    </div>
  );
};
