import * as React from "react";

// CODE PLAYGROUND ///////////////////// array.map()
const numbers = [1, 2, 3, 4];

const exponentialNumbers = numbers.map(function (number) {
  return number * number;
});

console.log(exponentialNumbers);
// [1, 4, 9, 16]
///////////////////////////////////////

const list = [
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

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />

      <ul>
        {/* CODE PLAYGROUND: array.map(... key={index}) */}
        {list.map((item, index) => {
          return (
            <li key={index}>
              {/* only use index as a last resort */}

              {item.title}
            </li>
          );
        })}
        {/* end comment for CODE PLAYGROUND example code */}

        {list.map((item) => {
          return (
            <li key={item.objectID}>
              <span>
                <a href="{item.url}">{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
