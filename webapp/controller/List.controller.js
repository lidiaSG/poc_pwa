sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/dom/includeScript"
], function (Controller, includeScript) {
	"use strict";

	return Controller.extend("com.frigicoll.poc_pwa.controller.List", {

		/*onInit: function() {
			if (Controller.prototype.onInit) {
				Controller.prototype.onInit.apply(this, arguments);
			}
		}*/
		onInit: function() {
			if(Controller.prototype.onInit) {
				Controller.prototype.onInit.apply(this.arguments);
			}
		},

		onAfterRendering: function() {
			if (Controller.prototype.onAfterRendering) {
			  Controller.prototype.onAfterRendering.apply(this, arguments);
			}
			this.initMap();
		},


		initMap: function() {
			// Map options
			var fnShowPosition = (position) => {
				this.drawMap(position)
			},
			fnShowPositionError = () =>{
			  //showError
			};
	  
			if(navigator.geolocation) {
			  navigator.geolocation.getCurrentPosition(fnShowPosition, fnShowPositionError, {enableHighAccuracy: true});
	  
			} else {
			  console.log("Geo Location not supported by browser");
			}
	  
		},

	  	drawMap: function(position) {
		    var options = {
				zoom:14,
				center: {
				  lat:position.coords.latitude,
				  lng: position.coords.longitude
				}	
			}
	
			// New map
			var map = new google.maps.Map(document.getElementById(this.getView().getId() + "--mapContainer"), options);
		},
		  
		// Add Marker Function
		addMarker : function(props) {
			var marker = new google.maps.Marker({
				position:props.coords,
				map:map,
				//icon:props.iconImage
			});
		}
	});
});