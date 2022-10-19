/**
 * Count orders with a quantity greater than 10
 */


/**
 * What are the top 3 most selling products (based on sold quantity)?
 */

db.orders.aggregate([
    {"$group": {"_id": "$product", "quantities": {"$sum": "$quantity"}}},
    {"$sort": {"quantities": -1}},
    {"$limit": 3}
  ]);

/**
 * Which city sold the most products?
 */

db.orders.aggregate([
    {"$group": {'_id': '$address.city', 'quantities': {'$sum': '$quantity'}},
    {"$sort": {"quantities": -1}},
    {"$limit": 1}
  ]);

/**
 * What was the best month for sales (based on product prices)?
 */
