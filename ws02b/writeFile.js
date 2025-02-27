const fs = require('fs');

const additionalText = "This is appended text!\n";

fs.appendFile('output.txt', additionalText, 'utf8', (err) => {
  if (err) {
    console.error('Error appending to file:', err.message);
    return;
  }
  console.log('Text has been successfully appended.');
});
