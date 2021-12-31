/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ZYH/ZYH_TEST_DIF/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});