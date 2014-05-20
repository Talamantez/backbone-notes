define(["backbone", "hbs!app/templates/employees"], function(Backbone, employeesTmpl) {

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

    return EmployeesView;
});
