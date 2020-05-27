
Alarm = function (sensor, range) {

	this._thresholdRange = range || [17, 21];
	this._sensor = sensor || new PressureSensor();
	this._alarmOn = false;
};

Alarm.prototype = {

	check: function () {

		var psiPressureValue = this._sensor.popNextPressurePsiValue();

		if (psiPressureValue < this._thresholdRange[0] || this._thresholdRange[1] < psiPressureValue) {
			this._alarmOn = true;
		}
	},

	alarmOn: function () {
		return this._alarmOn;
	}

};
