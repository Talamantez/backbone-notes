define([
        "backbone",
        "app/models/employee"
    ],

    function(
        Backbone,
        EmployeeModel
    ) {
        //CREATE EMPLOYEES COLLECTION
        var Employees = Backbone.Collection.extend({
            model: EmployeeModel
        });

        return Employees;

    });