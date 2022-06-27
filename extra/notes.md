# Notes

Instead of passing the `handleSearchSubmit()` handler to the button, it's used in the new form element's `onSubmit` attribute. The button receives a new `type` attribute called `submit`, which indicates that the form element's `onSubmit` handles the click and not the button. Next, since the handler is used for the form event, it executes `preventDefault()` additionally on React's synthetic event.

When we have input fields and a button to submit data from them, we can give our HTML more structure by wrapping it into a form element with a `onSubmit` attribute. The button that executes the submission therefore needs the "submit" type to refer the process to the form element's handler.

# Exercises

- Confirm the [source code](https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/2021/Forms-in-React?file=/src/App.js).
  - Confirm the [changes](https://github.com/the-road-to-learn-react/hacker-stories/compare/2021/Async-Await-in-React...2021/Forms-in-React).
- Try what happens without using preventDefault.
  - Read more about [preventDefault for events in React](https://www.robinwieruch.de/react-preventdefault/).
