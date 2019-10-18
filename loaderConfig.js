// I don't think, that we need that
let widgetMap = {
	dojo: 'widgetDojo'
};

dojoConfig = {
	baseUrl: 'http://localhost:3000/dojo/js/',
	packages: [{ name: 'widgetDojo', location: 'lib/dojo' }, { name: 'myDojo1Widget', location: 'lib/app' }],
	map: {
		widgetDojo: widgetMap,
		myDojo1Widget: widgetMap
	},
	has: {
		highcontrast: 0
	},
	async: true
};
