  WITH "profit" as (
  SELECT "filmId",
    "title",
    "description",
    "rating",
    SUM("P"."amount") as "totalRevenue",
    COUNT("P"."amount") as "PaymentCount"
  FROM "payments" as "P"
  JOIN "rentals" using ("rentalId")
  JOIN "inventory" using ("inventoryId")
  JOIN "films" using ("filmId")
  GROUP BY "filmId"
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
