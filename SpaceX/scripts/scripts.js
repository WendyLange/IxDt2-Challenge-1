window.onload = function () {

var chart1 = new CanvasJS.Chart("chartReserves", {
	animationEnabled: true,
	theme: "dark2",
	title:{
		text: "Food reserves",
	},
	axisX:{
		valueFormatString: "MMM YYYY",
		crosshair: {
			enabled: true,
			snapToDataPoint: true
		}
	},
	axisY: {
		title: "Total of reserves",
		crosshair: {
			enabled: true
		}
	},
	toolTip:{
		shared:true
	},  
	legend:{
		cursor:"pointer",
		verticalAlign: "bottom",
		horizontalAlign: "left",
		dockInsidePlotArea: true,
		itemclick: toogleDataSeries,
	},
	data: [{
		type: "line",
		showInLegend: true,
		name: "Food",
		markerType: "square",
		xValueFormatString: "MMM, YYYY",
		color: "#F08080",
		dataPoints: [
			{ x: new Date(2031, 0), y: 800 },
			{ x: new Date(2031, 6), y: 780 },
			{ x: new Date(2032, 0), y: 720 },
			{ x: new Date(2032, 6), y: 688 },
			{ x: new Date(2033, 0), y: 734 },
			{ x: new Date(2033, 6), y: 863 },
			{ x: new Date(2034, 0), y: 847 },
			{ x: new Date(2034, 6), y: 853 },
			{ x: new Date(2035, 0), y: 869 },
			{ x: new Date(2035, 6), y: 943 },
			{ x: new Date(2036, 0), y: 970 },
			{ x: new Date(2036, 6), y: 869 },
			{ x: new Date(2037, 0), y: 890 },
			{ x: new Date(2037, 6), y: 930 }
		]
	},
	{
		type: "line",
		showInLegend: true,
		name: "Water",
		lineDashType: "dash",
		dataPoints: [
			{ x: new Date(2031, 0), y: 710 },
			{ x: new Date(2031, 6), y: 680 },
			{ x: new Date(2032, 0), y: 640 },
			{ x: new Date(2032, 6), y: 600 },
			{ x: new Date(2033, 0), y: 544 },
			{ x: new Date(2033, 6), y: 693 },
			{ x: new Date(2034, 0), y: 657 },
			{ x: new Date(2034, 6), y: 663 },
			{ x: new Date(2035, 0), y: 639 },
			{ x: new Date(2035, 6), y: 673 },
			{ x: new Date(2036, 0), y: 660 },
			{ x: new Date(2036, 6), y: 562 },
			{ x: new Date(2037, 0), y: 643 },
			{ x: new Date(2037, 6), y: 670 }
		]
	}]
});

chart1.render();

	function toogleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		} else{
			e.dataSeries.visible = true;
		}
		chart1.render();
	}





	var chart2 = new CanvasJS.Chart("chartContainer", {
		theme: "dark2",
		exportFileName: "Doughnut Chart",
		exportEnabled: true,
		animationEnabled: true,
		title:{
			text: "Survivals"
		},
		legend:{
			cursor: "pointer",
			itemclick: explodePie
		},
		data: [{
			type: "doughnut",
			innerRadius: 90,
			showInLegend: true,
			toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
			indexLabel: "{name} - #percent%",
			dataPoints: [
				{ y: 450, name: "Men" },
				{ y: 500, name: "Women" },
				{ y: 300, name: "Plants" },
				{ y: 150, name: "Other" }
			]
		}]
	});
	chart2.render();

	function explodePie (e) {
		if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
			e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
		} else {
			e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
		}
		e.chart2.render();
	}



var chart3 = new CanvasJS.Chart("chartCol", {
	animationEnabled: true,
	theme: "dark2", //"light1", "dark1", "dark2"

	title:{
		text: "Division of Products used"             
	},
	axisY:{
		interval: 10,
		suffix: "%"
	},
	toolTip:{
		shared: true
	},
	data:[{
		type: "stackedBar100",
		toolTipContent: "{label}<br><b>{name}:</b> {y} (#percent%)",
		showInLegend: true, 
		name: "2031",
		dataPoints: [
			{ y: 200, label: "Water Filter" },
			{ y: 300, label: "memory cards" },
			{ y: 100, label: "Transmitors" },
			{ y: 400, label: "Lab equipment" },
			{ y: 120, label: "EHBO equipment" }
		]
		},
		{
			type: "stackedBar100",
			toolTipContent: "<b>{name}:</b> {y} (#percent%)",
			showInLegend: true, 
			name: "2032",
			dataPoints: [
				{ y: 500, label: "Water Filter" },
				{ y: 500, label: "Memory cards" },
				{ y: 320, label: "Transmitors" },
				{ y: 280, label: "Lab equipment" },
				{ y: 220, label: "EHBO equipment" }
			]
		}, 
		{
			type: "stackedBar100",
			toolTipContent: "<b>{name}:</b> {y} (#percent%)",
			showInLegend: true, 
			name: "2033",
			dataPoints: [
				{ y: 300, label: "Water Filter" },
				{ y: 610, label: "Memory cards" },
				{ y: 450, label: "Transmitors" },
				{ y: 221, label: "Lab equipment" },
				{ y: 75, label: "EHBO equipment" }
			]
	}]
});
chart3.render();

//Make the X on the menu bars active, in the header section
$(document).ready(function(){
	$('.menu-toggle').click(function(){
		$('.menu-toggle').toggleClass('active')
		$('.nav').toggleClass('active')
	})
})



}


