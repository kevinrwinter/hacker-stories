# Notes

Task: The application renders a list of items and allows its users to filter the list via a search feature. Next the application should render a button next to each list item which allows its users to remove the item from the list.

Optional Hints:

- The list of items needs to become a stateful value in order to manipulate it (e.g. removing an item) later.
- Every list item renders a button with a click handler. When clicking the button, the item gets removed from the list by manipulating the state.
- Since the stateful list resides in the App component, one needs to use callback handlers to enable the Item component to communicate up to the App component for removing an item by its identifier.

Using JavaScript's [bind method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) on a function allows us to bind arguments directly to that function that should be used when executing it. The bind method returns a new function with the bound argument attached.

While using an inline handler is more concise than using a normal event handler, it can also be more difficult to debug because JavaScript logic may be hidden in JSX. It becomes even more verbose if the inline arrow function encapsulates more than one line of implementation logic by using a block body instead of a concise body:

# Exercises

- Confirm the [source code](https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/2021/Inline-Handler-in-JSX).
  - Confirm the [changes](https://github.com/the-road-to-learn-react/hacker-stories/compare/2021/Imperative-React...2021/Inline-Handler-in-JSX).
- Read more about how to [add](https://www.robinwieruch.de/react-add-item-to-list/), [update](https://www.robinwieruch.de/react-update-item-in-list/) and [remove](https://www.robinwieruch.de/react-remove-item-from-list/) items in a list.
- Read more about [computed properties in React](https://www.robinwieruch.de/react-computed-properties/).
- Review handlers, callback handlers, and inline handlers.
