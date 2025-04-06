import { useCallback, useEffect, useState } from "react";
const url = "https://www.themealdb.com/api/json/v1/1/search.php";

export const TestSearch = ({ setFoodData }) => {
  const [query, setQuery] = useState("pizza");
  // useEffect is used to call API each time the value of "query" changes
  // const fetchFood = useCallback(async () => {
  //   const res = await fetch(`${url}?s=${query}`);
  //   const data = await res.json();
  //   console.log(data.meals);
  //   setFoodData(data.meals);
  // }, [query, setFoodData]);
  // const fetchFood = () => {
  //   useCallback(setFoodData(),[query])
  // }
  // useEffect(() => {
  //   fetch(`${url}?s=${query}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.meals);
  //       setFoodData(data.meals);
  //     });
  // }, [query]);
  // useEffect(() => {
  //   fetchFood();
  // }, [fetchFood]);
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${url}?s=${query}`);
      const data = await res.json();
      console.log(data.meals);
      setFoodData(data.meals);
    }
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Find your favorite recipe"
      />
    </div>
  );
};
