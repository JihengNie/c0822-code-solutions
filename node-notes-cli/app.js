let data = require('./data.json');
const { nextId, notes } = data;
const fs = require('fs');
const command = process.argv[2];

if (command === 'read') {
  for (const items in notes) {
    console.log(`${items}: ${notes[items]}`);
  }
} else if (command === 'create') {
  const note = process.argv[3];
  data.notes[nextId] = note;
  data.nextId++;
} else if (command === 'update') {
  const value = process.argv[3];
  const newMessage = process.argv[4];
  data.notes[value] = newMessage;
} else if (command === 'delete') {
  const deleteIndex = process.argv[3];
  delete data.notes[deleteIndex];
} else {
  console.log('Please enter a valid command');
}

savingData();

function savingData() {
  data = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', data, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}
