# Notes

The initial state for the stories is an empty array and therefore nothing gets rendered in the List component. After the App component is rendered, the side-effect hook runs once to fetch the asynchronous data. After resolving the promise and setting the data in the component's state, the component renders again and displays the list of asynchronously loaded stories.

# Exercises

- Confirm the [source code](https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/2021/React-Asynchronous-Data).
  - Confirm the [changes](https://github.com/the-road-to-learn-react/hacker-stories/compare/2021/Inline-Handler-in-JSX...2021/React-Asynchronous-Data).
- Read more about [JavaScript Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
- Read more about [faking a remote API with JavaScript](https://www.robinwieruch.de/javascript-fake-api/).
  - Read more about[ using mock data in React](https://www.robinwieruch.de/react-mock-data/).
