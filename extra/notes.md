# Notes

Rules of thumb:

- Always use object destructuring for props in a function component's function signature, because props are rarely used themselves. Exception: When props are only passed through the component to the next child component (see when to use spread operator).

- Use the spread operator when you want to pass all key/value pairs of an object to a child component in JSX. For example, often props themselves are not used in a component but only passed along to the next component. Then it makes sense to just spread the props object `{...props}` to the next component.

- Use the rest operator when you only want to split out certain properties from your props object.
- Use nested destructuring only when it improves readability.

# Exercises

- Confirm the [source code](https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/2021/Props-Handling).
  - Confirm the [changes](https://github.com/the-road-to-learn-react/hacker-stories/compare/2021/React-Controlled-Components...2021/Props-Handling).
- Read more about [how to use props in React](https://www.robinwieruch.de/react-pass-props-to-component/).
- Optional: Read more about [JavaScript's destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).
- Question: Why is array destructuring used for React Hooks like `useState` and object destructuring for props?
  - Answer: First of all, a React Hook like `useState` returns an array and props are an object hence the we need to apply the fitting operation for the underlying data structure. The benefit of having an array returned from `useState` is that the values can be given any name in the destructuring operation.
- Read more about [JavaScript's spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and [rest operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
- Get a good sense about JavaScript (e.g. destructuring, spread operator, rest destructuring) and how it relates to React (e.g. props) from the last lessons.
- Continue to use your favorite way to handle React's props. If you're still undecided, consider the variation used in the previous section.
