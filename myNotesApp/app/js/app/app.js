define([
    "jquery",
    "backbone",
    "app/models/employee",
    "app/collections/employees",
    "app/views/employee",
    "app/views/employees",
    "hbs!app/templates/employee",
    "hbs!app/templates/employees",
    "json2"
], function(
    $,
    Backbone,
    EmployeeModel,
    Employees,
    EmployeeView,
    EmployeesView,
    employeeTmpl,
    employeesTmpl
) {
    "use strict";

    $(function() {
        $(".notes-html").hide();
        $("<div class = 'employees' />").appendTo("body");
        //$("<div class = 'employee' />").appendTo($(".employees"));
        //employee model VIEW
        //CREATE EMPLOYEES
        var robert = new EmployeeModel({
            firstName: "Robert",
            lastName: "Talamantez",
            position: "Coder"
        });
        var xerxes = new EmployeeModel({
            firstName: "xerxes",
            lastName: "jones",
            position: "Vice-President of Conquering"
        });
        var robertView = new EmployeeView({
            model: robert
        });
        //robertView.render();
        var xerxesView = new EmployeeView({
            model: xerxes
        });
        //xerxesView.render();
        //robert.set("position", "punchcard jockey");

        var employees = new Employees();
        employees.add(robert);
        employees.add(xerxes);


        //Instatiate EmployeesView
        var employeesView = new EmployeesView({
            collection: employees
        });
        //render employees
        employeesView.render();
    });
});
