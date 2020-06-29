/* React */
import React, { useState, useCallback } from "react";
import ReactDom from "react-dom";
/* Muuri-react */
import { MuuriComponent } from "muuri-react";
import { Select, Header, Checkbox, Input, Demo } from "./components";
import { data } from "./data";

// App.
function App() {
  // Sort state.y
  const [sort, setSort] = useState({
    value: "index"
  });

  // Filter state.
  const [filterByStable, setFilter] = useState(false);

  // Filter method.
  const filterFunction = useCallback(
    function(data) {
      return !filterByStable || data.stable;
    },
    [filterByStable]
  );

  // Children.
  const children = data.map(({ name, moreDetailsUrl, imageUrl, pros, cons, averagePerformance, stable, addedOn, description, index }) => (
    <Item
      key={name}
      index={index}
      name={name}
      moreDetailsUrl={moreDetailsUrl}
      imageUrl={imageUrl}
      pros={pros}
      cons={cons}
      averagePerformance={averagePerformance}
      addedOn={addedOn}
      description={description}
      stable={stable}
    />
  ));

  return (
    <Demo>
      {/* Header */}
      <Header>
        <Checkbox onClick={e => setFilter(e.target.checked)}/>
        <Select
          values={[
            ["Default", "index"],
            ["Name", "name"],
            ["Added On", "addedOn"],
          ]}
          onChange={e => setSort({ ...sort, value: e.target.value })}
        />
      </Header>
      {/* Content */}
      <MuuriComponent
        propsToData={({ index, name, addedOn, stable }) => ({ index, name, addedOn, stable })}
        filter={filterFunction}
        sort={sort.value}
        forceSync={true}
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
        <a href={moreDetailsUrl} target="_blank"> What is {name}?</a> 
      </div>
      <div className="cardImage">
        <img src={imageUrl}/>
      </div>
      <div className="cardContent">
      <ul>
        <li>{description}</li>
        <li>{averagePerformance}</li>
        <li>{addedOn}</li>
        <li>{pros}</li>
        <li>{cons}</li>
        </ul>
      </div>
     </div>
    </div>
  );
};


export default App;