const fs = require('fs');

const dirPath = 'testDir';

fs.mkdir(dirPath, { recursive: true }, (err) => {
  if (err) {
    console.error('Error creating directory:', err.message);
    return;
  }
  console.log('Directory created successfully:', dirPath);

  fs.rmdir(dirPath, (err) => {
    if (err) {
      console.error('Error removing directory:', err.message);
      return;
    }
    console.log('Directory removed successfully:', dirPath);
  });
});
