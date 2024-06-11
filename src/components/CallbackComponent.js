import React, { useState, useCallback } from 'react';

// useCallback

/* Explanation:
 The useCallback hook returns a memoized callback function, which helps to prevent unnecessary re-renders by ensuring that the function reference remains the same across renders.

 Sure! Let's consider a scenario where you have a parent component that renders a list of items, and each item has a button to delete it. You want to optimize performance by preventing unnecessary re-renders of the child components when the list is updated.

  We have a ListItem component that renders each item in the list along with a delete button.
  We wrap the handleDelete function in useCallback hook. This memoizes the function so that it doesn't get recreated on every render unless its dependencies (onDelete and item.id) change. This prevents unnecessary re-renders of the ListItem components.
  Similarly, in the List component, we wrap the handleDeleteItem function in useCallback hook to prevent unnecessary re-renders of the List component itself.
  We use React.memo to memoize the ListItem component, so it only re-renders if its props (item) change.
 */

const ListItem = React.memo(({ item, onDelete }) => {
  console.log(`Rendering item ${item.id}`);

  const handleDelete = useCallback(() => {
    onDelete(item.id);
  }, [onDelete, item.id]);

  return (
    <div>
      <span>{item.name}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
});

const List = ({ items }) => {
  const [list, setList] = useState(items);

  const handleDeleteItem = useCallback((id) => {
    setList((prevList) => prevList.filter((item) => item.id !== id));
  }, []);

  return (
    <div>
      {list.map((item) => (
        <ListItem key={item.id} item={item} onDelete={handleDeleteItem} />
      ))}
    </div>
  );
};

const CallbackComponent = () => {
  const initialItems = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  return <List items={initialItems} />;
};

export default CallbackComponent;
