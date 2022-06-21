# Notes

# Exercises

- Confirm the [source code](https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/2021/React-Conditional-Rendering).
  - Confirm the [changes](https://github.com/the-road-to-learn-react/hacker-stories/compare/2021/React-Asynchronous-Data...2021/React-Conditional-Rendering).
- Read more about [conditional rendering in React](https://www.robinwieruch.de/conditional-rendering-react/).
- Question: Why didn't we need a conditional rendering for the empty `stories` before they get fetched from the fake API?
  - Answer: The `stories` are mapped as list in the List component by using the `map()` method. When mapping over a list, the `map()` method returns for every item a modified version (in our case JSX). If there are no items in the list, the `map()` method will return nothing. Therefore we do not need a conditional rendering here.
- Question: What would happen if the initial state of `stories` would be set to `null` instead of []?
  - Answer: Then we would need a conditional rendering in the List component, because calling `map()` on `null` would throw an exception.
