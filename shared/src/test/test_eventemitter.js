QUnit.module("Event Emitter");

test("hasRegistrations", function() {
    var evt = new Fusion.EventEmitter();
    ok(!evt.hasRegistrations(0), "Expected hasRegistrations = false because we have no event handlers registered");
});

test("registerForEvent", function() {
    var evt = new Fusion.EventEmitter();
    evt.registerForEvent(Fusion.EventType.INITIALIZED, function() {});
    ok(!evt.hasRegistrations(Fusion.EventType.ERROR), "Expected hasRegistrations = false because we have no event handlers registered for this event type");
    ok(evt.hasRegistrations(Fusion.EventType.INITIALIZED), "Expected registrations on initialized event");
});