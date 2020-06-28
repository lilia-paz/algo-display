import { useCallback } from "react";
import { data } from "./data"; 

// Return the filter method.
function useFilter(value, search) {
  return useCallback(
    function(data) {
      var isSearchMatch = !search
        ? true
        : data.title.toLowerCase().indexOf(search) > -1;
      var isFilterMatch = value === "all" ? true : data.color === value;
      return isSearchMatch && isFilterMatch;
    },
    [value, search]
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
