const bcryptjs = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "Bob from IT",
          password: bcryptjs.hashSync("test123", 12),
          department: "it"
        },
        {
          username: "Steve from IT",
          password: bcryptjs.hashSync("12345", 12),
          department: "it"
        },
        {
          username: "Lydia from HR",
          password: bcryptjs.hashSync("password", 12),
          department: "hr"
        }
      ]);
    });
};
