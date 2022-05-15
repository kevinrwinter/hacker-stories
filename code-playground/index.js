const user = {
  firstName: "Kevin",
  lastName: "Winter",
};

// Without object destructuring
const firstName = user.firstName;
const lastName = user.lastName;

// With object destructuring
const { firstName, lastName } = user;
