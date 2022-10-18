SELECT "line1",
  "city"."name" as "city name",
  "district"
FROM "addresses" JOIN "cities" as "city" USING ("cityId");
