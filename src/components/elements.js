import React from 'react'

  const List = ({ list }) => (
    <ul>
      {list.map((item) => (
        <Item
          key={item.id}
          item={item}
        />
      ))}
    </ul>
  );
  
  const Item = ({ item }) => (
    <li key={item.id}>
      <span key={item.id}>{item.id}-{ item.name} / {item.rating}</span>
    </li>
  );

  export {List, Item}