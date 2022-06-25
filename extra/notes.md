# Notes

Re-fetching all data each time someone types in the input field isn't optimal. Since we're using a third-party API to fetch the data, its internals is out of our reach. Eventually, we will be confronted with [rate limiting](https://en.wikipedia.org/wiki/Rate_limiting) which returns an error instead of data. To solve this problem, we will change the implementation details from implicit to explicit data (re-)fetching. In other words, the application will refetch data only if someone clicks a confirmation button.

Before, the` searchTerm` was used for two cases: updating the input field's state and activating the side-effect for fetching data. Now it's only used for the former. A second state called `url` got introduced for triggering the side-effect that fetches the data which only happens when a user clicks the confirmation button.

# Exercises

- Confirm the [source code](https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/2021/Explicit-Data-Fetching-with-React).
  - Confirm the [changes](https://github.com/the-road-to-learn-react/hacker-stories/compare/2021/Memoized-Handler-in-React...2021/Explicit-Data-Fetching-with-React).
- Question: Why is `useState` instead of `useStorageState` used for the `url` state management?
  - Answer: We do not want to remember the `url` in the browser's local storage, because it's already derived from a static string (here: `API_ENDPOINT`) and the `searchTerm` which already comes from the browser's local storage.
- Question: Why is there no check for an empty `searchTerm` in the `handleFetchStories` function anymore?
  - Answer: Preventing a server-side search happens in the new button, because it gets disabled whenever there is no `searchTerm`.
