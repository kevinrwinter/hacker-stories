# Notes

... one of the most common data manipulation methods: the [array’s built-in map()
method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

Usually using an index should be avoided though, because it comes with the same rendering
performance issues from above. In addition, it can [cause actual bugs in the UI](https://www.robinwieruch.de/react-list-key/) whenever the order of items got changed (e.g. re-ordering, appending or removing items). However, as last resort, if the list does not change its order in any way, using the index is fine.

# Exercises

- Confirm [source code](https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/2021/Lists-in-React).
- Confirm the [changes](https://github.com/the-road-to-learn-react/hacker-stories/compare/2021/React-JSX...2021/Lists-in-React).
- Recap the standard [built-in array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), especially map, filter, and reduce, which are
  available in native JavaScript.
- Question: What happens if you return null instead of the JSX?
  - Answer: Returning null in JSX is allowed. It’s always used if you want to render nothing.
- Extend the list with some more items to make the example more realistic.
- Practice using different JavaScript expressions in JSX.
