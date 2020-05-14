describe('Tyre Pressure Monitoring System', function () {

	describe('Alarm', function () {

		it('gets turned on when pressure is too low', function () {
      var sensor = {popNextPressurePsiValue: () => 16};
			var target = new Alarm(sensor);
			target.check();

      expect(target.alarmOn()).toEqual(true);
		});

    it('gets turned on when pressure is too high', function() {
      var sensor = { popNextPressurePsiValue: () => 22 };
      var target = new Alarm(sensor);

      target.check();

      expect(target.alarmOn()).toEqual(true);
    });

	});

});
