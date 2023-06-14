import request from 'supertest';
import app from './server'; // Importing the app from the main file
import fs,{readFileSync} from 'fs';

describe('GET /', () => {
  test.skip('should respond with status code 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  test.skip('should render a html document', async () => {
    const response = await request(app).get('/');
    expect(response.text).toContain('<!DOCTYPE html>');
  });
});

describe('GET /main', () => {
  test.skip('should respond with status code 200', async () => {
    const response = await request(app).get('/main');
    expect(response.statusCode).toBe(200);
  });

  test.skip('should render a html document', async () => {
    const response = await request(app).get('/main');
    expect(response.text).toContain('<!DOCTYPE html>');
  });
});
