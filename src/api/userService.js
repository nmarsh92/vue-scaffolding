const users = [
  {
    firstName: "Ted",
    lastName: "Moesby",
    email: "ted@mosbiusdesigns.com",
    password: "123"
  },
  {
    firstName: "Barney",
    lastName: "Stinson",
    email: "barney@goliathnationalbank.com",
    password: "456"
  }
];

export default {
  //todo implement actual login service calls
  login({ email, password }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        var user = users.find((u) => {
          return u.email == email;
        });

        if (user && user.password == password) {
          resolve(user);
        }

        reject("Incorrect username or password.");
      }, 100);
    });
  },
  //todo implement service call to check token from cookie/web storage
  getUserFromToken({ token }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (token) {
          return resolve(users[0]);
        } else {
          reject();
        }
      }, 100);
    });
  }
};
