SELECT "releaseYear",
  "genres"."name" as "genres name",
  "title"
FROM "films"
JOIN "filmGenre" USING ("filmId")
JOIN "genres"using ("genreId")
WHERE "title" = 'Boogie Amelie';
