const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/posts/1';

axios.get(url)
  .then(response => {
    console.log('Data received:', response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

  