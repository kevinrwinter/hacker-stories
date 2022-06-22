# Notes

There is nothing wrong with multiple `useState` hooks in one React component. Be wary once you see multiple state updater functions in a row, however. These conditional states can lead to **impossible states** and undesired behavior in the UI.

We moved from unreliable state transitions with multiple `useState` hooks to predictable state transitions with React's `useReducer` Hook. The state object managed by the reducer encapsulates everything related to the fetching of stories including loading and error states, but also implementation details like removing a story from the stories.

# Exercises

- Confirm the [source code](https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/2021/React-Impossible-States?file=/src/App.js).
  - Confirm the [changes](https://github.com/the-road-to-learn-react/hacker-stories/compare/2021/React-Advanced-State...2021/React-Impossible-States).
- Read more about [when to use useState or useReducer in React](https://www.robinwieruch.de/react-usereducer-vs-usestate/).
- Read more about [deriving state from props in React](https://www.robinwieruch.de/react-derive-state-props/).
