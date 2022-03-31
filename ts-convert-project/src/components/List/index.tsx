import React from "react";

interface Props<T> {
  listHeader?: string;
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
  data: T[];
}

const List = <T extends unknown>({
  listHeader,
  data,
  renderItem,
  keyExtractor,
}: Props<T>) => (
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
