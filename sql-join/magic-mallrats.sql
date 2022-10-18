SELECT "firstName",
  "lastName",
  "inventoryId",
  "filmId",
  "customerId"
FROM "inventory"
JOIN "films" using ("filmId")
JOIN "rentals" using ("inventoryId")
JOIN "customers" using ("customerId")
WHERE "title" = 'Magic Mallrats';
