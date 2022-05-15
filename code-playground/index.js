// const user = {
//   firstName: "Kevin",
//   lastName: "Winter",
// };

// // Without object destructuring
// const firstName = user.firstName;
// const lastName = user.lastName;

// // With object destructuring
// const { firstName, lastName } = user;

const petOwner = {
  firstName: "Kevin",
  pet: {
    name: "Leevi",
  },
};

// Without object destructuring
// const firstName = petOwner.firstName;
// const name = petOwner.pet.name;

// console.log(firstName + " has a pet called " + name);
// "Kevin has a pet called Leevi"

// With nested object destructuring
const {
  firstName,
  pet: { name },
} = petOwner;

console.log(firstName + " has a pet called " + name);
// "Kevin has a pet called Leevi"
