# Notes

In this section, we are confronted with the following task: Use the stateful `searchTerm` from the Search component to filter the `stories` by their title property in the App component before they are passed as props to the List component.

Move the state from the Search component to the App component, pass the state
updater function to the Search component as callback handler and use it to update the state when a user types into the input field. Then use the new state in the App component to `filter()` the `stories` before they are passed to the List component.

# Exercises

- Confirm the [source code](https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/2021/Lifting-State-in-React).
  - Confirm the [changes](https://github.com/the-road-to-learn-react/hacker-stories/compare/2021/Callback-Handler-in-JSX...2021/Lifting-State-in-React).
- Read more about [lifting state in React](https://www.robinwieruch.de/react-lift-state/).
