/**
 * @jest-environment jsdom
 */
import logValidate from './login';
//mock the html elements
var element=document.createElement('body')
// element.innerHTML = `
document.body.innerHTML = `
  <div>
    <span id="error1"></span>
    <span id="error2"></span>
    <span id="mainError"></span>
    <input id="username" type="text">
    <input id="password" type="password">
  </div>
`;
describe('Testing Login', () => {
  
  // Clear the input values and error messages before each test
  beforeEach(()=>{
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('error1').innerHTML = '&nbsp;';
    document.getElementById('error2').innerHTML = '&nbsp;';
    document.getElementById('mainError').style.display = 'none';
  });
  //null
  test.skip('Username is missing:', ()=> {
      const result=logValidate();
      expect(result).toBe(false);
      expect(document.getElementById('mainError').style.display).toBe('block');
      expect(document.getElementById('error1').innerText).toBe("please enter a user name!");
      expect(document.getElementById('error2').innerText).toBeUndefined();
  });
  //wrong
  test.skip('Wrong Username, any password:', ()=> {
      document.getElementById('username').value = 'user@example.com';
      document.getElementById('password').value = 'password';

      const result=logValidate();
      expect(result).toBe(false);
      expect(document.getElementById('mainError').style.display).toBe('block');
      expect(document.getElementById('error1').innerText).toBe("user not found!");
      expect(document.getElementById('error2').innerText).toBeUndefined();
  });
  //any username, no password
  test.skip('Only Password is missing:', ()=> {
      document.getElementById('username').value = 'abcd';
      document.getElementById('password').value = '';
  
      const result=logValidate();
      expect(result).toBe(false);
      expect(document.getElementById('mainError').style.display).toBe('block');
      expect(document.getElementById('error1').innerText).toBeUndefined();
      expect(document.getElementById('error2').innerText).toBe("please enter the password");
  });
    //correct username, wrong password 
  test.skip('Correct username, Wrong password:', ()=> {
      document.getElementById('username').value = 'admin@example.com';
      document.getElementById('password').value = '123456';
  
      const result=logValidate();
      expect(result).toBe(false);
      expect(document.getElementById('mainError').style.display).toBe('block');
      expect(document.getElementById('error1').innerText).toBeUndefined();
      expect(document.getElementById('error2').innerText).toBe("wrong password!");
  });
  //correct username and password
  test('Correct Username and password:', ()=> {
      document.getElementById('username').value = 'admin@example.com';
      document.getElementById('password').value = 'password';
  
      const result=logValidate();
      expect(result).toBe(true);
      expect(document.getElementById('mainError').style.display).toBe('none');
      expect(document.getElementById('error1').innerText).toBeUndefined();
      expect(document.getElementById('error2').innerText).toBeUndefined();
      window.location.href="second.html";
  });
});