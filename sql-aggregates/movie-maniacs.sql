SELECT "firstName",
  "lastName",
  sum("amount") as "amount paid"
FROM "customers" JOIN "payments" using ("customerId")
GROUP BY "firstName","lastName"
ORDER BY "amount paid" DESC;
