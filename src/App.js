import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const useStorageState = (key, initialState) => {
  const [value, setValue] = React.useState(localStorage.getItem(key) || initialState);

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

const App = () => {
  const initialStories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = useStorageState("search", "React");

  // A: To gain control over the list, make it stateful by using it as initial state in React's useState Hook. The returned values from the array are the current state (stories) and the state updater function (setStories):
  const [stories, setStories] = useState(initialStories);

  // B: Next, we will write an event handler which removes an item from the list:
  const handleRemoveStory = (item) => {
    const newStories = stories.filter((story) => item.objectID !== story.objectID);

    setStories(newStories);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) => story.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <InputWithLabel id="search" value={searchTerm} isFocused onInputChange={handleSearch}>
        <strong>Search:</strong>
      </InputWithLabel>
      <hr />

      <List list={searchedStories} onRemoveItem={handleRemoveStory} />
    </div>
  );
};

const InputWithLabel = ({ id, value, type = "text", onInputChange, isFocused, children }) => {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{children}</label>

      <input id={id} ref={inputRef} type={type} value={value} onChange={onInputChange} />
    </>
  );
};

const List = ({ list, onRemoveItem }) => (
  <ul>
    {list.map((item) => (
      <Item
        key={item.objectID}
        item={item}
        // C: The List component itself does not use this new callback handler, but only passes it on to the Item component:
        onRemoveItem={onRemoveItem}
      />
    ))}
  </ul>
);

const Item = ({ item, onRemoveItem }) => {
  // D: Finally, the Item component uses the incoming callback handler as a function in a new handler. In this handler, we will pass the specific item to it. Moreover, an additional button element is needed to trigger the actual event:
  const handleRemoveItem = () => {
    onRemoveItem(item);
  };

  return (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <span>
        <button type="button" onClick={handleRemoveItem}>
          Remove
        </button>
      </span>
    </li>
  );
};

export default App;
