# Notes

. . . using a side-effect to store the recent search from the browser's local storage and retrieve it upon the initial component initialization.

. . . using React `useEffect` Hook instead of managing the side-effect in the (event) handler has made the application more robust. Whenever and wherever the `searchTerm` state is updated via `setSearchTerm`, the browser's local storage will always be in sync with it.

# Exercises

- Confirm the [source code](https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/2021/React-Side-Effects).
  - Confirm the [changes](https://github.com/the-road-to-learn-react/hacker-stories/compare/2021/Props-Handling...2021/React-Side-Effects).
- Read more about [how to useEffect in React](https://www.robinwieruch.de/react-useeffect-hook/).
  - Give the first argument's function a console.log() and experiment with React's useEffect Hook's dependency array. Check the logs for an empty dependency array too.
- Read more about [using local storage with React](https://www.robinwieruch.de/local-storage-react/).
- Try the following scenario: In your browser, backspace the search term from the input field until nothing is left there. Internally, it should be set to an empty string now. Next, refresh the browser and check what it displays. You may be wondering why it does show "React" instead of "", because "" should be the recent search. That's because JavaScript's logical OR evaluates "" to false and thus takes "React" as the true value. If you want to prevent this and evaluate "" as true instead, you may want to exchange JavaScript's logical OR operator || with [JavaScript's nullish coalescing operator ??](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator).
