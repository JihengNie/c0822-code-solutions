SELECT "countries"."name" as "countries name",
  count(*) as "cities count"
FROM "countries" as "countries" JOIN "cities" using ("countryId")
group by "countries name";
