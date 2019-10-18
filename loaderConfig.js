// I don't think, that we need that
dojoConfig = {
	baseUrl: 'http://localhost:3000/dojo/js/',
	packages: [{ name: 'widgetDojo', location: 'lib/dojo' }, { name: 'myDojo1Widget', location: 'lib/app' }],
	map: {
		widgetDojo: maskWidgetMap,
		myDojo1Widget: maskWidgetMap
	},
	has: {
		highcontrast: 0
	},
	async: true
};
