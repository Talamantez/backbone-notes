define(["backbone",
        "app/models/employee",
        "hbs!app/templates/employee"
    ],

    function(
        Backbone,
        EmployeeModel,
        employeeTmpl) {
        var EmployeeView = Backbone.View.extend({
            // HTML element to attach to.
            el: ".employee ",
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
        return EmployeeView;
    });
