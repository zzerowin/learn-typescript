// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const address = document.querySelector('address');

// user data
const user = {};

/**
 * @typedef {obj} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}

fetchUser().then(function (respones) {
  respones.address.city
});


function startApp() {
  // axios
  //   .get(url)
  fetchUser()
    .then(function (response) {
      // console.log(response);
      const user = response.data;
      // TODO: 이름, 이메일, 주소 표시
      console.log(user);
      username.innerText = user[0].name;
      email.innerText = user[0].eamil;
      address.innerText = user[0].address.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}


startApp();