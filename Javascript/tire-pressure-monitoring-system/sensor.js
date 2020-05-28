
PressureSensor = function () {

	PressureSensor.Offset = function () { return 16; };
	PressureSensor.SamplePressure = function () {
		// placeholder implementation that simulate a real sensor in a real tire

		var pressureTelemetryValue = Math.floor(6 * Math.random() * Math.random());
		return pressureTelemetryValue;
	};
};

PressureSensor.prototype = {

	popNextPressurePsiValue: function () {
		var pressureTelemetryValue = PressureSensor.SamplePressure();

		return PressureSensor.Offset() + pressureTelemetryValue;
	}
};

PressureSensorAdapter = function () { }

PressureSensorAdapter.prototype = {
	getValue: function () {
		var pressureSensor = new PressureSensor()
		return pressureSensor.popNextPressurePsiValue()
	}
}
