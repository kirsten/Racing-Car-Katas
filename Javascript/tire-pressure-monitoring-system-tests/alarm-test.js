describe('Tyre Pressure Monitoring System', function () {

	describe('Alarm', function () {

		it('gets turned on when pressure is too low', function () {

			var target = new Alarm();
			target.check();

		});

	});

});
