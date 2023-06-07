// const request = require('supertest');
import express from 'express';
// Import the app from the main file
const app=express();

describe('GET /', () => {
  test('should respond with status code 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

//   it('should render the index view', async () => {
//     const response = await request(app).get('/');
//     expect(response.text).toContain('This is the index view');
//   });
});

// describe('GET /main', () => {
//   it('should respond with status code 200', async () => {
//     const response = await request(app).get('/main');
//     expect(response.statusCode).toBe(200);
//   });

//   it('should render the second view', async () => {
//     const response = await request(app).get('/main');
//     expect(response.text).toContain('This is the second view');
//   });
// });
