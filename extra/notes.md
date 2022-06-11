# Notes

Because we don’t pass a type prop from the App component to the InputWithLabel component,
the [default parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) from the function signature takes over for the type. Thus, every time the InputWithLabel component is used without a `type` prop, the default type will be `"text"`.

With just a few changes we turned a specialized Search component into a more reusable InputWithLabel component. We generalized the naming of the internal implementation details and gave the new component a larger API surface to provide all the necessary information from the outside.

# Exercises

- Confirm the [source code](https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/2021/Reusable-React-Component).
  - Confirm the [changes](https://github.com/the-road-to-learn-react/hacker-stories/compare/2021/React-Fragments...2021/Reusable-React-Component).
- Read more about [Reusable React Components](https://www.robinwieruch.de/react-reusable-components/) and build some of these components yourself:
  - [Dropdown in React](https://www.robinwieruch.de/react-dropdown/)
  - [Checkbox in React](https://www.robinwieruch.de/react-checkbox/)
  - [Button in React](https://www.robinwieruch.de/react-button/)
  - [ Radio Button in React](https://www.robinwieruch.de/react-radio-button/)
- Before we used the text "Search:" with a ":". How would you deal with it now? Would you pass it with `label="Search:"` as prop to the InputWithLabel component or hardcode it after the `<label htmlFor={id}>{label}:</label>` usage in the InputWithLabel component? We will see how to cope with this later.
