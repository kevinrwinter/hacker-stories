# Notes

Now the React component's elements behave similarly to native HTML. Everything that's passed between a component's elements can be accessed as `children` in the component and be rendered somewhere. Sometimes when using a React component, you want to have more freedom from the outside regarding what to render on the inside of a component.

With the React children prop, we can compose React components into each other. We've used it with a string and with a string wrapped in an HTML `<strong>` element, but it doesn't end here. You can pass React elements via React children as well -- which you should definitely explore more as an exercise.

# Exercises

- Confirm the [source code](https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/2021/React-Component-Composition).
  - Confirm the [changes](https://github.com/the-road-to-learn-react/hacker-stories/compare/2021/Reusable-React-Component...2021/React-Component-Composition).
- Read more about[ Component Composition in React](https://www.robinwieruch.de/react-component-composition/).
