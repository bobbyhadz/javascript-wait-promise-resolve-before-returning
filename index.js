// EXAMPLE 1 - Wait for a Promise to Resolve before Returning in JavaScript

async function getNum() {
  const promise = new Promise(resolve => resolve(42));

  const num = await promise;

  console.log(num); // 👉️ 42

  return num;
}

getNum()
  .then(num => {
    console.log(num); // 👉️ 42
  })
  .catch(err => {
    console.log(err);
  });

// ------------------------------------------------------------------

// // EXAMPLE 2 - Wait for N seconds before resolving a Promise

// function getNum() {
//   const resolveValue = 42;

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(resolveValue);
//     }, 3000);
//   });
// }

// getNum()
//   .then(num => {
//     console.log(num); // 👉️ 42
//   })
//   .catch(err => {
//     console.log(err);
//   });

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using a `try/catch` statement to handle Rejected promises

// async function getNum() {
//   try {
//     const promise = new Promise((resolve, reject) =>
//       reject(new Error('test error')),
//     );

//     await promise;

//     return "This doesn't run";
//   } catch (err) {
//     // 👇️ this runs
//     throw err;
//   }
// }

// getNum()
//   .then(num => {
//     console.log(num);
//   })
//   .catch(err => {
//     // 👇️ this runs
//     console.log(err.message); // ⛔️ "test error"
//   });

// ------------------------------------------------------------------

// // EXAMPLE 4 - Using then() to wait for a Promise to resolve before returning

// function getNum() {
//   const p1 = new Promise(resolve => {
//     resolve(42);
//   });

//   return p1.then(value => {
//     // 👇️ can run code here before returning
//     console.log(value);

//     // 👇️ return from the function here
//     return 'example function return value';
//   });
// }

// getNum()
//   .then(value => {
//     console.log(value); // 👉️ example function return value
//     return value;
//   })
//   .catch(err => {
//     console.log(err);
//   });
