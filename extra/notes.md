# Notes

... check out this[ guide about reducers in JavaScript](https://www.robinwieruch.de/javascript-reducer/).

The reducer covers two state transitions, shows how to compute the current state and action into a new state, and uses some business logic (removal of a story) for a state transition. Now we can set a list of stories as state for the asynchronously arriving data and remove a story from the list of stories with just one state managing reducer and its associated `useReducer` hook.

# Exercises

- Confirm the [source code](https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/2021/React-Advanced-State).
  - Confirm the [changes](https://github.com/the-road-to-learn-react/hacker-stories/compare/2021/React-Conditional-Rendering...2021/React-Advanced-State).
- Read more about [reducers and useReducer in React](https://www.robinwieruch.de/react-usereducer-hook/).
- Extract the action types `'SET_STORIES'` and `'REMOVE_STORY'` as variables and reuse them in the reducer and the dispatch functions. This way, you will avoid introducing typos in your action types.
