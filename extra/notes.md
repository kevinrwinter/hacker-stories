# Notes

To use async/await, our function requires the `async` keyword. Once you start using the `await` keyword on returned promises, everything reads like synchronous code. Actions after the `await` keyword are not executed until the promise resolves, meaning the code will wait. To include error handling as before, the `try` and `catch` blocks are there to help. If something goes wrong in the `try` block, the code will jump into the `catch` block to handle the error.

# Exercises

- Confirm the [source code](https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/2021/Async-Await-in-React?file=/src/App.js).
  - Confirm the [changes](https://github.com/the-road-to-learn-react/hacker-stories/compare/2021/Third-Party-Libraries-in-React...2021/Async-Await-in-React).
- Read more about [data fetching in React](https://www.robinwieruch.de/react-hooks-fetch-data/).
