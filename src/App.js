import * as React from "react";
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
  const stories = [
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

      <List list={searchedStories} />
    </div>
  );
};

const InputWithLabel = ({ id, value, type = "text", onInputChange, isFocused, children }) => {
  // A: First, create a ref with React's useRef Hook. This ref object is a persistent value which stays intact over the lifetime of a React component. It comes with a property called `current`, which, in contrast to the `ref` object, can be changed.
  const inputRef = useRef();

  // C: Third, opt into React's lifecycle with React's useEffect Hook, performing the focus on the element when the component renders (or its dependencies change).
  useEffect(() => {
    if (isFocused && inputRef.current) {
      // D: And fourth, since the ref is passed to the element's ref attribute, its `current` property gives access to the element. Execute its focus programmatically as a side-effect, but only if `isFocused` is set and the `current` property is existent.
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{children}</label>

      {/* B: Second, the ref is passed to the element's JSX-reserved ref attribute and thus element instance gets assigned to the changeable `current` property. */}
      <input
        id={id}
        ref={inputRef}
        type={type}
        value={value}
        // autoFocus={isFocused}
        onChange={onInputChange}
      />
    </>
  );
};

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = ({ item }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
);

export default App;
