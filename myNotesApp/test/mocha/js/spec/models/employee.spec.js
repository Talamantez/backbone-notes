//http:127.0.0.1:3000/test.html
//test/mocha/js/spec/models/employee.spec.js
define(["app/models/employee"], function(EmployeeModel) {

    describe("app/models/employee", function() {
        it("should have defaults", function() {
            var employee = new EmployeeModel();
            expect(employee.get("position")).to.equal("martian invader");
        });

    it("should stub get", function(){
        var stub = sinon.stub(EmployeeModel.prototype, "get", function(){
            return "Heyoo";
        });
        var employee = new EmployeeModel();
        
        expect(employee.get("position")).to.equal("Heyoo");
        stub.restore();
    });    
    });
});
//
