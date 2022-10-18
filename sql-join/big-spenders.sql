SELECT "customerId",
  "firstName",
  "lastName",
  "amount"
FROM  "payments"
JOIN "customers" using ("customerId")
order By "amount" DESC
Limit 10;
