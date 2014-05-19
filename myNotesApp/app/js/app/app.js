define([
    "jquery",
    "backbone",
    "hbs!app/templates/employee",
    "hbs!app/templates/employees",
    "json2"
], function(
    $,
    Backbone,
    employeeTmpl,
    employeesTmpl
) {
    "use strict";



    $(function() {
        $(".notes-html").hide();
        $("<div class = 'employees' />").appendTo("body");
        //$("<div class = 'employee' />").appendTo($(".employees"));


        //EMPLOYEE MODEL
        var EmployeeModel = Backbone.Model.extend({
            defaults: {
                firstName: "",
                lastName: "",
                postition: ""
            }
        });

        //employee model VIEW
        var EmployeeView = Backbone.View.extend({
            // HTML element to attach to.
            el: ".employee",
            // Model data to use (unless one is passed to constructor).
            model: EmployeeModel,
            template: employeeTmpl,
            initialize: function() {
                this.listenTo(this.model, "change", this.render);
            },
            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        });
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
        //CREATE EMPLOYEES COLLECTION
        var Employees = Backbone.Collection.extend({
            model: EmployeeModel
        });
        var employees = new Employees();
        employees.add(robert);
        employees.add(xerxes);

        //employees collection VIEW
        var EmployeesView = Backbone.View.extend({
            el: ".employees",
            template: employeesTmpl,
            initialize: function() {
                this.listenTo(this.collection, "change", this.render);
            },
            render: function() {
                this.$el.html(this.template(this.collection.toJSON()));
            }
        });
        //Instatiate EmployeesView
        var employeesView = new EmployeesView({
            collection: employees
        });
        //render employees
        employeesView.render();
    });
});
