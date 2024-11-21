import React from "react";

// Definimos las propiedades con un tipo genérico.
type ListProps<T> = {
  items: T[];
  readonly?: boolean;
  filter?: (item: T) => boolean;
};

const List = <T extends unknown>({ items, readonly, filter }: ListProps<T>) => {
  const filteredItems = filter ? items.filter(filter) : items;

  return (
    <ul>
      {filteredItems.map((item, index) => (
        <li key={index} style={{ pointerEvents: readonly ? "none" : "auto" }}>
          {String(item)} {/* Convertimos el item a string */}
        </li>
      ))}
    </ul>
  );
};

export default List;
