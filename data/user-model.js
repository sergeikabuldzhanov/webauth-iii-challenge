const db = require("./db-config");
function u() {
  return db("users");
}

function getAll() {
  return u();
}

function getById(id) {
  return u()
    .where({ id })
    .first();
}

function getByUsername(username) {
  return u()
    .where({ username })
    .first();
}

function getByDepartment(department) {
  return u().where({ department });
}

function insert(user) {
  return u()
    .insert(user)
    .then(([id]) => getById(id));
}

module.exports = {
  getAll,
  getById,
  getByDepartment,
  insert,
  getByUsername
};
