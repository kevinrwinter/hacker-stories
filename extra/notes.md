# Notes

We will refactor the code to use a memoized function. The refactoring contains moving all the data-fetching logic from the side-effect into an arrow function expression (A), wrapping this new function into React's useCallback hook (B), and invoking it in the useEffect hook (C):

However, we have used React's `useCallback` Hook to wrap the extracted function, so let's explore why it's needed here. React's `useCallback` Hook creates a memoized function every time its dependency array (E) changes. As a result, the `useEffect` hook runs again (C), because it depends on the new function (D):

```
1. change: searchTerm (cause: user interaction)
2. change: handleFetchStories
3. run: side-effect
```

If we didn't create a memoized function with React's `useCallback` Hook, a new `handleFetchStories` function would be created each time the App component re-renders, and would be executed in the `useEffect` hook to fetch data. The fetched data is then stored as state in the component. Because the state of the component changed, the component re-renders and creates a new `handleFetchStories` function. The side-effect would be triggered to fetch data, and we'd be stuck in an endless loop:

```
1. define: handleFetchStories
2. run: side-effect
3. update: state
4. re-render: component
5. re-define: handleFetchStories
6. run: side-effect
...
```

React's `useCallback` hook changes the function only when one of its values in the dependency array changes. That's when we want to trigger a re-fetch of the data, because the input field has new input and we want to see the new data displayed in our list.

By moving the data fetching function outside the React's useEffect Hook, it becomes reusable for other parts of the application. ... Now the `useEffect` hook runs implicitly when the `searchTerm` changes, because the `handleFetchStories` is re-defined each time the `searchTerm` changes. Since the `useEffect` hook depends on the `handleFetchStories`, the side-effect for data fetching runs again.

# Exercises

- Confirm the [source code](https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/2021/Memoized-Handler-in-React?file=/src/App.js).
  - Confirm the [changes](https://github.com/the-road-to-learn-react/hacker-stories/compare/2021/Data-Re-Fetching-in-React...2021/Memoized-Handler-in-React).
- Read more about [React's useCallback Hook](https://www.robinwieruch.de/react-usecallback-hook/).
