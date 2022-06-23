# Notes

In this section, we will use the informative [Hacker News API](https://hn.algolia.com/api) to request popular tech stories.

First, the `API_ENDPOINT` (A) is used to fetch popular tech stories for a certain query (a search term). In this case, we fetch stories about React (B). Second, the native browser's [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) is used to make this request (B). For the fetch API, the response needs to be translated into JSON (C). Finally, the returned result has a different data structure (D), which we send as payload to our component's state reducer.

# Exercises

- Confirm the [source code](https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/2021/Data-Fetching-with-React).
  - Confirm the [changes](https://github.com/the-road-to-learn-react/hacker-stories/compare/2021/React-Impossible-States...2021/Data-Fetching-with-React).
- Read through [Hacker News](https://news.ycombinator.com/) and its[ API](https://hn.algolia.com/api).
- Optional: Read more about[ JavaScript's Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).
