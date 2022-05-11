# Notes

The concept of the callback handler in a nutshell: We pass a function from a parent component (App) to a child component (Search) via props; we call this function in the child component (Search), but have the actual implementation of the called function in the parent component (App). Essentially when an (event) handler is passed as props from a parent component to its child component, it becomes a callback handler. React props are always passed down the component tree and therefore functions that are passed down as callback handlers in props can be used to communicate up the component hierarchy.

# Exercises

- Confirm the [source code](https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/2021/Callback-Handler-in-JSX).
  - Confirm the [changes](https://github.com/the-road-to-learn-react/hacker-stories/compare/2021/React-State...2021/Callback-Handler-in-JSX).
