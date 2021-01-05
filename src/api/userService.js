const users = [
  {
    id: '1',
    firstName: 'Ted',
    lastName: 'Moesby',
    email: 'ted@mosbiusdesigns.com',
    password: '123'
  },
  {
    id: '2',
    firstName: 'Barney',
    lastName: 'Stinson',
    email: 'barney@goliathnationalbank.com',
    password: '456'
  }
];

export default {
  //todo implement actual login service calls
  login({ email, password }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        var user = users.find(u => {
          return u.email == email;
        });

        if (user && user.password == password) {
          resolve({ user: user, token: user.id });
        }

        reject('Incorrect username or password.');
      }, 100);
    });
  },
  //todo implement service call to check token from cookie/web storage
  getUserFromToken({ token }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (token) {
          return resolve(
            users.find(x => {
              return x.id == token;
            })
          );
        } else {
          reject();
        }
      }, 100);
    });
  }
};
