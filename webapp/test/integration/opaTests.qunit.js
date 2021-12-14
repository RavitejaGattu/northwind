/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["northwind/odata/ui5/northwind/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
