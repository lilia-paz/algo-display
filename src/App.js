/* React */
import React, { useState } from "react";
import ReactDom from "react-dom";
/* Muuri-react */
import { MuuriComponent } from "muuri-react";
/* Utils & components */
import { useFilter, generateItems, options } from "./utils";
import { Select, Header, Footer, Button, Input, Demo } from "./components";
import { data } from "./data";

// App.
function App() {
  // Sort state.
  const [sort, setSort] = useState({
    value: "title"
  });

  // Filter state.
  const [filter, setFilter] = useState({
    search: "",
    value: "all"
  });

  // Filter method.
  const filterFunction = useFilter(filter.value, filter.search);

  // Children.
  const children = data.map(({ name, moreDetailsUrl, imageUrl, pros, cons, averagePerformance, stable, addedOn, description }) => (
    <Item
      key={name}
      name={name}
      moreDetailsUrl={moreDetailsUrl}
      imageUrl={imageUrl}
      pros={pros}
      cons={cons}
    />
  ));
  console.log(children);

  return (
    <Demo>
      {/* Header */}
      <Header>
        <Input
          onKeyUp={e => setFilter({ ...filter, search: e.target.value })}
        />
        <Select
          values={["All", "Red", "Blue", "Green"]}
          onChange={e => setFilter({ ...filter, value: e.target.value })}
        />
        <Select
          values={["Title", "Color"]}
          onChange={e => setSort({ ...sort, value: e.target.value })}
        />
      </Header>
      {/* Content */}
      <MuuriComponent
        {...options}
        propsToData={({ color, title }) => ({ color, title })}
        filter={filterFunction}
        sort={sort.value}
      >
        {children}
      </MuuriComponent>
    </Demo>
  );
};

// Item component.
const Item2 = ({ name, moreDetailsUrl, imageUrl, pros, cons, averagePerformance, stable, addedOn, description }) => {
  return (
    <div className={"item h2 w2"}>
      <div className="item-content">
        <div className="card">
          <div className="card-title">
            <a href={moreDetailsUrl} target="_blank">{name}</a> 
          </div>
          <div className="card-content">
          
            {/* image */}
            {/* description */}
            {pros}, {cons}
          </div>
        </div>
      </div>
    </div>
  );
};

const Item = ({ name, moreDetailsUrl, imageUrl, pros, cons, averagePerformance, stable, addedOn, description }) => {
  return (
    <div className="cardContainer">
     <div className="card">
     <div className="cardTitle">
        <a href={moreDetailsUrl} target="_blank">{name}</a> 
      </div>
      <div className="cardImage">
        <img src="https://images.immediate.co.uk/production/volatile/sites/4/2018/07/GettyImages-175622118-5109db9.jpg?quality=90&resize=940,399" alt="bubble sort image"/>
      </div>
      <div className="cardContent">
        <ul>
          <li>{pros}</li>
          <li>{cons}</li>
        </ul>
      </div>
     </div>
    </div>
  );
};


export default App;

/**
1 - Get the screen/code sharing setup working ✅
2 - Get sandbox version of muuri grid demo working locally ✅
2.5 - fix the css ✅
3 - Add JSON data to app ✅
4 - Create cards based on JSON data (unstructured) ✅
5 - Render the image for the card
6 - Render links for each card ✅
7 - Make sure images are same size
 */