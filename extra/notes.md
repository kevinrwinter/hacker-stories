# Notes

We changed the feature from a client-side to server-side search. Instead of filtering a predefined list of stories on the client, the `searchTerm` is used to fetch a server-side filtered list. The server-side search happens not only for the initial data fetching, but also for data fetching if the `searchTerm` changes. The search feature is fully server-side now.

# Exercises

- Confirm the [source code](https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/2021/Data-Re-Fetching-in-React).
  - Confirm the [changes](https://github.com/the-road-to-learn-react/hacker-stories/compare/2021/Data-Fetching-with-React...2021/Data-Re-Fetching-in-React).
