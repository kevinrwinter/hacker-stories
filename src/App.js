import * as React from "react";

// const title = "React";

// const welcome = {
//   greeting: "Moi",
//   title: "React",
// };

function getTitle(title) {
  return title;
}

function App() {
  return (
    <div>
      {/* <h1>Hello {title}</h1> */}
      <h1>
        {/* {welcome.greeting} {welcome.title} */}
        Hello {getTitle("React")}
      </h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
