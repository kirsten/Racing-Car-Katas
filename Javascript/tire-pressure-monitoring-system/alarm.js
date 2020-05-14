
Alarm = function(sensor) {

  this._thresholdRange = [17, 21];
	this._sensor = sensor || new Sensor();
	this._alarmOn = false;
};

Alarm.prototype = {

	check: function () {

		var psiPressureValue = this._sensor.popNextPressurePsiValue();

		if (psiPressureValue < this._thresholdRange[0] || this._thresholdRange[1] < psiPressureValue)
		{
			this._alarmOn = true;
		}
	},

	alarmOn: function () {
		 return this._alarmOn;
	}

};
