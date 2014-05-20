define(["backbone"], function(Backbone) {
    //EMPLOYEE MODEL
    var EmployeeModel = Backbone.Model.extend({
        defaults: {
            firstName: "",
            lastName: "",
            position: "martian invader"
        }
    });
    return EmployeeModel;
});
