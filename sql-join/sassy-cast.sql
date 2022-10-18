SELECT "firstName",
  "lastName"
FROM "films"
JOIN "castMembers" USING ("filmId")
JOIN "actors" USING ("actorId")
WHERE "title" = 'Jersey Sassy';
