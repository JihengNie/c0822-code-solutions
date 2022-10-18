SELECT
  "g"."name" as "genere name",
  count(*) as "movie count"
FROM "actors"
JOIN "castMembers" using ("actorId")
JOIN "filmGenre" using ("filmId")
JOIN "genres" as "g" using ("genreId")
where "firstName" = 'Lisa' and "lastName" = 'Monroe'
group by "genere name";
