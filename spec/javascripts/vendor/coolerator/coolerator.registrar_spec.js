//= require <support/spec_helper>

Screw.Unit(function(c) { with(c) {
  describe("Coolerator.Registrar", function() {
    it("is added to the Coolerator namespace", function() {
      expect(typeof Coolerator.Registrar).to(equal, 'object');
    });
  });
}});
