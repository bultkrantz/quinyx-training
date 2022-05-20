import React from "react";

// Props for list

const List = ({ listHeader, data, renderItem, keyExtractor }) => (
  <div>
    {listHeader && <h4>{listHeader}</h4>}
    <ul>
      {data.map((item) => (
        <li key={keyExtractor(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  </div>
);

export default List;
