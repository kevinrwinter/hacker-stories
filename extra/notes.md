# Notes

In native HTML, we can [add event handlers](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) on elements by using the addEventListener() method.

React’s synthetic event is essentially a wrapper around the [browser’s native event](https://developer.mozilla.org/en-US/docs/Web/Events).

... to [prevent the native browser behavior](https://www.robinwieruch.de/react-preventdefault/).

# Exercises

- Confirm the [source code](https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/2021/Handler-Function-in-JSX).
  - Confirm the [changes](https://github.com/the-road-to-learn-react/hacker-stories/compare/2021/React-Component-Definition...2021/Handler-Function-in-JSX).
- Read more about [React’s event handler](https://www.robinwieruch.de/react-event-handler/) and [React’s events](https://reactjs.org/docs/events.html).
  - Read more about [event capturing and bubbling in React](https://www.robinwieruch.de/react-event-bubbling-capturing/).
- In addition to the onChange attribute, add a onBlur attribute with an event handler to your input field and verify its logging in the browser’s developer tools.
