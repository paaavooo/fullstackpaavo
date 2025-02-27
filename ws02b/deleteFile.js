const fs = require('fs');

const filePath = 'temp.txt';

fs.unlink(filePath, (err) => {
  if (err) {
    console.error('Error deleting file:', err.message);
    return;
  }
  console.log('File successfully deleted:', filePath);
});
