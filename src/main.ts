/// <reference path='../typings/custom.types.d.ts' />

let dojo1BaseUrl = 'http://localhost:3000/dojo';
let dojo1SourceUrl = dojo1BaseUrl + '/js/';

let widgetMap = {
	dojo: 'widgetDojo'
};

if (typeof require !== 'function') {
	location.reload();
}
require({
	packages: [{ name: 'widgetDojo', location: dojo1SourceUrl + 'lib/dojo' }],
	map: { widgetDojo: widgetMap }
}, ['widgetDojo/main'], function() {
	require({
		packages: [{ name: 'myDojo1Widget', location: dojo1SourceUrl + 'lib/app' }],
		map: { myDojo1Widget: widgetMap }
	}, ['app/widget', 'dojo/dom', 'dojo/dom-construct'], function(
		widget: any,
		dom: any,
		domClass: any,
		Deferred: any,
		dojoRequest: any
	) {
		widget.setReceiver('Sitepen');
	});
});
