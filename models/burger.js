//require ORM
var orm = require("../config/orm.js");

//burger variable and callback function 
var burger = {
    selectAll: function (callback) {
        orm.selectAll("burgers", function (res) {
            callback(res);
        });
    },

    //insert function
    insertOne: function (cheese, callback) {
        orm.insertOne("burgers", "burger_name", cheese, function (buns) {
            console.log("burgerJS cheese: ", cheese, "buns: ", buns);
            callback(buns);
        });
    },
    //update function
    updateOne: function (colVal, id, cb) {
        orm.updateOne(colVal, id, function (res) {
            cb(res);
        });
    },
    //delete function
    deleteOne: function (id, callback) {
        orm.deleteOne(id, function (res) {
            callback(res);
        });
    }
};

module.exports = burger;
