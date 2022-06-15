# Notes

Task: The application renders a list of items and allows its users to filter the list via a search feature. Next the application should render a button next to each list item which allows its users to remove the item from the list.

Optional Hints:

- The list of items needs to become a stateful value in order to manipulate it (e.g. removing an item) later.
- Every list item renders a button with a click handler. When clicking the button, the item gets removed from the list by manipulating the state.
- Since the stateful list resides in the App component, one needs to use callback handlers to enable the Item component to communicate up to the App component for removing an item by its identifier.

# Exercises

- Confirm the [source code](https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/2021/Imperative-React).
  - Confirm the [changes](https://github.com/the-road-to-learn-react/hacker-stories/compare/2021/React-Component-Composition...2021/Imperative-React).
- Read more about [refs in React](https://www.robinwieruch.de/react-ref/) and optionally check out the following tutorials which are using refs:
  - [Create a Slider component with a ref](https://www.robinwieruch.de/react-slider/)
  - [Create an image from a React component with a ref](https://www.robinwieruch.de/react-component-to-image/)
  - [Create a custom hook with a ref](https://www.robinwieruch.de/react-custom-hook-check-if-overflow/)
- Read more about [why frameworks matter](https://www.robinwieruch.de/why-frameworks-matter/).
