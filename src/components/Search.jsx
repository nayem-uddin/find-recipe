import styles from "./stylesheets/search.module.css";
import { useEffect, useState } from "react";
const url = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "d02179917e2b4cb2b73cb95c55c2760a";

export const Search = ({ foodData, setFoodData }) => {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    (async function fetchFood() {
      const res = await fetch(`${url}?query=${query}&apiKey=${apiKey}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    })();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchBar}
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Find your favorite recipe"
      />
    </div>
  );
};
