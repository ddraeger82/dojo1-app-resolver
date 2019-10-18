// I don't think, that we need that
dojoConfig = {
	baseUrl: 'http://localhost:9998/myDojo1Widget/',
	packages: [{ name: 'widgetDojo', location: 'dojo' }, { name: 'myDojo1Widget', location: 'myDojo1Widget' }],
	map: {
		widgetDojo: maskWidgetMap,
		myDojo1Widget: maskWidgetMap
	},
	has: {
		highcontrast: 0
	},
	async: true
};
