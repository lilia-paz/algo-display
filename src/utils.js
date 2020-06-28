import { useCallback } from "react";
import { data } from "./data"; 

// Return the filter method.
function useFilter(filterByStable) {
  return useCallback(
    function(data) {
      console.log(data.name, !filterByStable || data.stable);
      return !filterByStable || data.stable;
    },
    [filterByStable]
  );
}

// Return one of the values of the array.
function oneOf(array) {
  return array[Math.floor(Math.random() * Math.floor(array.length))];
}

let uuid = 3;
// Generate 3 items.
function generateItems() {
  const items = data.map(item => {

    return {

    };
  });

  return items;
}

// Grid static options.
const options = {
  layoutDuration: 400,
};

export { useFilter, generateItems, options };
