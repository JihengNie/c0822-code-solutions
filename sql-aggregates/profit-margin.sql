  WITH "profit" as (
  SELECT "filmId",
    "title",
    "description",
    "rating",
    SUM("p"."amount") as "totalRevenue",
    COUNT("p"."amount") as "PaymentCount"
  FROM "films"
  JOIN "inventory" using ("filmId")
  JOIN "rentals" using ("inventoryId")
  JOIN "payments" as "p" using ("customerId")
  GROUP BY "filmId"
  ORDER BY "filmId" desc
  ),
"cost" as (
  SELECT "filmId",
    "title",
    COUNT("inventoryId") as "inventoryCount",
    "f"."replacementCost" as "replacementCost",
    COUNT("inventoryId") * "f"."replacementCost"as "totalReplacementCost"
  FROM "films" as "f"
  JOIN "inventory" using ("filmId")
  GROUP BY "filmId"
  ORDER BY "filmId" desc
)

SELECT "filmId",
  "p"."title",
  "description",
  "rating",
  "totalRevenue",
  "totalReplacementCost",
  "totalRevenue" - "totalReplacementCost" as "totalProfit"
FROM "profit" as "p" JOIN "cost" using ("filmId")
ORDER BY "totalProfit" DESC
LIMIT 5;
