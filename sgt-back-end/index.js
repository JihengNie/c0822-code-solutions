const pg = require('pg');
const express = require('express');
const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/grades', (req, res) => {
  const sql = `
    SELECT *
    FROM "grades"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const sql = `
    INSERT INTO "grades" ("name","course","score")
    values ($1, $2, $3)
    RETURNING*
  `;
  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;
  const params = [name, course, score];

  if (!name || !course || !score) {
    res.status(400).json({
      error: 'Either name, course, or score is missing.',
      itemsEntered: `name: ${name}, course:${course}, score: ${score}`
    });
    return;
  }
  if (score < 0 || score > 100) {
    res.status(400).json({
      error: 'Please enter a score between 0 - 100.',
      itemsEntered: `score: ${score}`
    });
    return;
  }
  db.query(sql, params)
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const sql = `
    UPDATE "grades"
    SET "name" = $1,
      "course" = $2,
      "score" = $3
    WHERE "gradeId" = $4
    RETURNING *
  `;
  const gradeId = Number(req.params.gradeId);
  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;
  const params = [name, course, score, gradeId];

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }

  if (!name || !course || !score) {
    res.status(400).json({
      error: 'Either name, course, or score is missing.',
      itemsEntered: `name: ${name}, course:${course}, score: ${score}`
    });
    return;
  }
  if (score < 0 || score > 100) {
    res.status(400).json({
      error: 'Please enter a score between 0 - 100.',
      itemsEntered: `score: ${score}`
    });
    return;
  }

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const sql = `
    DELETE FROM "grades"
      WHERE "gradeId" = $1
    RETURNING *
  `;
  const gradeId = Number(req.params.gradeId);
  const params = [gradeId];

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(204).json({
          message: 'Item has been removed'
        });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });
});
