const fs = require('fs');

const filePath = 'watch.txt';

fs.watch(filePath, (eventType, filename) => {
  if (filename) {
    if (eventType === 'change') {
      console.log(`File ${filename} has been modified.`);
    }
  } else {
    console.log('Filename not provided.');
  }
});
