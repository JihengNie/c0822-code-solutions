const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');

app.get('/api/notes', (req, res) => {
  const dataArray = [];
  for (const items in data.notes) {
    dataArray.push(data.notes[items]);
  }
  res.send(dataArray);
});

app.get('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;
  const noteAtId = data.notes[noteId];
  const errorReports = {
    400: {
      error: 'id is not a positive integer'
    },
    404: {
      error: 'No notes with this id'
    }
  };
  if (noteId < 0) {
    res.status(400).json(errorReports[400]);
  } else if (!noteAtId) {
    res.status(404).json(errorReports[404]);
  } else {
    res.json(noteAtId);
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const contentProperty = req.body.content;
  const nextId = data.nextId;
  const errorReports = {
    400: {
      error: 'content is a empty'
    },
    500: {
      error: 'an unexpected error occurred'
    }
  };
  if (!contentProperty) {
    res.status(400).json(errorReports[400]);
  } else if (contentProperty) {
    const newNote = {};
    newNote.id = nextId;
    newNote.content = contentProperty;
    data.notes[nextId] = newNote;
    data.nextId++;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        res.status(500).json(errorReports[500]);
      } else {
        res.status(201).json(newNote);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;
  const noteAtId = data.notes[noteId];
  const errorReports = {
    400: {
      error: 'id is not a positive integer'
    },
    404: {
      error: 'No notes with this id'
    },
    500: {
      error: 'an unexpected error occurred'
    }
  };
  if (noteId < 0) {
    res.status(400).json(errorReports[400]);
  } else {
    if (!noteAtId) {
      res.status(404).json(errorReports[404]);
    } else {
      delete data.notes[noteId];
      fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
        if (err) {
          res.status(500).json(errorReports[500]);
        } else {
          res.sendStatus(204);
        }
      });
    }
  }
});

app.put('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;
  const noteAtId = data.notes[noteId];
  const contentProperty = req.body.content;
  const errorReports = {
    400: {
      error: 'id is not a positive integer or content is a empty'
    },
    404: {
      error: 'No notes with this id'
    },
    500: {
      error: 'an unexpected error has occurred'
    }
  };
  if (noteId < 0 || !contentProperty || !noteId) {
    res.status(400).json(errorReports[400]);
  } else if (!noteAtId) {
    res.status(404).json(errorReports[404]);
  } else {
    data.notes[noteId].content = contentProperty;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        res.status(500).json(errorReports[500]);
      } else {
        res.status(200).json(data.notes[noteId]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
