// const { User } = require('../models');
// const app = require('../app');

// // beforeAll((done) => {
// //   const payload = {
// //     username: 'arrizalrahmat',
// //     email: 'arrizalrahmat@mail.com',
// //     password: '123123123',
// //   };
// //   User.create(payload)
// //     .then((user) => {
// //       done(user);
// //     })
// //     .catch((err) => {
// //       done(err);
// //     });
// // });

// describe('test /register success case', () => {
//   beforeEach(async () => {
//     mockedSequelize = new Sequelize({
//       database: 'students',
//       dialect: 'postgres',
//       username: 'postgres',
//       password: 'postgres',
//       validateOnly: true,
//       models: '../models/user.js',
//     });
//     await mockedSequelize.sync({ force: true });
//   });

//   afterEach(async () => {
//     jest.clearAllMocks();
//     await mockedSequelize.close();
//   });

//   test('should create user with username arrizalrahhmat12', () => {
//     const payload = {
//       username: 'arrizalrahmat12',
//       email: 'arrizalrahmat@mail.com',
//       password: '123123123',
//     };
//     request(app)
//       .post('/register')
//       .send(payload)
//       .end((err, res) => {
//         if (err) {
//           expect(res.status).toBe(500);
//         }
//         expect(res.status).toBe(201);
//         expect(res.body).toHaveProperty(
//           'id',
//           expect.any(Number)
//         );
//       });
//   });
// });

const request = require('supertest');
const app = require('../app'); // Assuming your app is defined in a separate file
const { User } = require('../models');

jest.mock('../models', () => {
  const SequelizeMock = require('sequelize-mock');
  const dbMock = new SequelizeMock();
  return {
    User: dbMock.define('User', {
      id: 1,
      username: 'testuser',
      email: 'test@example.com',
      password: 'hashedpassword',
    }),
  };
});

describe('UserController', () => {
  describe('POST /register', () => {
    it('should register a new user successfully', async () => {
      const newUser = {
        username: 'newuser',
        email: 'newuser@example.com',
        password: 'newpassword',
      };

      const response = await request(app)
        .post('/register')
        .send(newUser)
        .expect(201);

      // Ensure that the response contains the registered user's data
      expect(response.body).toHaveProperty(
        'id',
        expect.any(Number)
      );
      console.log(response.body, '<<<<<');
      expect(response.body).toHaveProperty(
        'username',
        newUser.username
      );
      expect(response.body).toHaveProperty(
        'email',
        newUser.email
      );
    });
  });
});
