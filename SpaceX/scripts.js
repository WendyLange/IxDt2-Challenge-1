window.onload = function () {

var chart1 = new CanvasJS.Chart("chartReserves", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Food reserves"
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
		itemclick: toogleDataSeries
	},
	data: [{
		type: "line",
		showInLegend: true,
		name: "Food",
		markerType: "square",
		xValueFormatString: "MMM, YYYY",
		color: "#F08080",
		dataPoints: [
			{ x: new Date(2031, 0), y: 650 },
			{ x: new Date(2031, 6), y: 700 },
			{ x: new Date(2032, 0), y: 710 },
			{ x: new Date(2032, 6), y: 658 },
			{ x: new Date(2033, 0), y: 734 },
			{ x: new Date(2033, 6), y: 963 },
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
			{ x: new Date(2031, 0), y: 510 },
			{ x: new Date(2031, 6), y: 560 },
			{ x: new Date(2032, 0), y: 540 },
			{ x: new Date(2032, 6), y: 558 },
			{ x: new Date(2033, 0), y: 544 },
			{ x: new Date(2033, 6), y: 693 },
			{ x: new Date(2034, 0), y: 657 },
			{ x: new Date(2034, 6), y: 663 },
			{ x: new Date(2035, 0), y: 639 },
			{ x: new Date(2035, 6), y: 673 },
			{ x: new Date(2036, 0), y: 660 },
			{ x: new Date(2036, 6), y: 562 },
			{ x: new Date(2037, 0), y: 643 },
			{ x: new Date(2037, 6), y: 570 }
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
				{ y: 120, name: "Women" },
				{ y: 800, name: "Housing" },
				{ y: 250, name: "Others" }
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
	theme: "light2", //"light1", "dark1", "dark2"
	title:{
		text: "Division of Products Sold in 2nd Quarter"             
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
		name: "April",
		dataPoints: [
			{ y: 600, label: "Water Filter" },
			{ y: 400, label: "Modern Chair" },
			{ y: 120, label: "VOIP Phone" },
			{ y: 250, label: "Microwave" },
			{ y: 120, label: "Water Filter" },
			{ y: 374, label: "Expresso Machine" },
			{ y: 350, label: "Lobby Chair" }
		]
		},
		{
			type: "stackedBar100",
			toolTipContent: "<b>{name}:</b> {y} (#percent%)",
			showInLegend: true, 
			name: "May",
			dataPoints: [
				{ y: 400, label: "Water Filter" },
				{ y: 500, label: "Modern Chair" },
				{ y: 220, label: "VOIP Phone" },
				{ y: 350, label: "Microwave" },
				{ y: 220, label: "Water Filter" },
				{ y: 474, label: "Expresso Machine" },
				{ y: 450, label: "Lobby Chair" }
			]
		}, 
		{
			type: "stackedBar100",
			toolTipContent: "<b>{name}:</b> {y} (#percent%)",
			showInLegend: true, 
			name: "June",
			dataPoints: [
				{ y: 300, label: "Water Filter" },
				{ y: 610, label: "Modern Chair" },
				{ y: 215, label: "VOIP Phone" },
				{ y: 221, label: "Microwave" },
				{ y: 75, label: "Water Filter" },
				{ y: 310, label: "Expresso Machine" },
				{ y: 340, label: "Lobby Chair" }
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


