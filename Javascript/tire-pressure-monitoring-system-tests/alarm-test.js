describe('Tyre Pressure Monitoring System', function () {

	describe('Alarm', function () {

		it('gets turned on when pressure is too low', function () {
			var sensor = { getValue: () => 16 };
			var target = new Alarm(sensor);
			target.check();

			expect(target.alarmOn()).toEqual(true);
		});

		it('gets turned on when pressure is too high', function () {
			var sensor = { getValue: () => 22 };
			var target = new Alarm(sensor);

			target.check();

			expect(target.alarmOn()).toEqual(true);
		});

		it('remains off when pressure is within range', function () {
			var sensor = { getValue: () => 20 };
			var target = new Alarm(sensor);

			target.check();

			expect(target.alarmOn()).toEqual(false);
		});

    it('turns on when gas is too low', function () {
        var sensor = { getValue: () => 2 };
        var range = [3, 10]
        var target = new Alarm(sensor, range);

        target.check();

        expect(target.alarmOn()).toEqual(true);
    });
    it('remains off when theres plenty of gas', function () {});
	});

});
