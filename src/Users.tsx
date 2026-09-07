/**
 * 1. data source || JSON
 *  JSON.stringify()
 *  JSON.parse()
 * 
 * .json()
 * 
 */


   // callback
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {console.log(data)})
 
