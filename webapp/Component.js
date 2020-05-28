sap.ui.define([
	"sap/ui/core/UIComponent"
], function(UIComponent) {
	"use strict";

	return UIComponent.extend("com.frigicoll.poc_pwa.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {// Additional initialization

			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			this.getRouter().initialize();

			var oAppDataModel = this.getModel("appData");
			setTimeout(async () => {
				oAppDataModel.setProperty("/hello_world", "AABBCC");
				let oServiceWorker = await navigator.serviceWorker.ready;

				let oPush = await oServiceWorker.pushManager.subscribe({
					// VAPID keys
					// Public key = BCG64b9sGLKTY_m-LL1JTxbDd1s5GJFLWqszo2qsEQkX19cpB8x9Wq8jwf_tw0eMOcASY75IPImIyBw_5sgp5dI
					// Private key = qqStHHdyoS6epmi-mg2TXV4a6XoTn6o0n88jfWE7sIk
					applicationServerKey: "BCG64b9sGLKTY_m-LL1JTxbDd1s5GJFLWqszo2qsEQkX19cpB8x9Wq8jwf_tw0eMOcASY75IPImIyBw_5sgp5dI",
					userVisibleOnly: true
				});

				oAppDataModel.setProperty("/endpoint", JSON.stringify(oPush));

				console.log("XXXXXXXXXXXXXX: " + JSON.stringify(oPush));

				/*sap.m.URLHelper.triggerEmail(
					"lidia.sarasua@enzymeadvisinggroup.com",
					"Endpoint",
					JSON.stringify(oPush));*/
				window.abcPushTest = oPush;
				// TODO: Send to server
				// This should contain the end point
				// "{"endpoint":"https://fcm.googleapis.com/fcm/send/fr8ww7FtsEU:APA91bEtc8vCoir3TbbRDNQuEyzlDWbM1fk9xCPU4MuCWBIGu9iQ5UNNcCfMaAdQbdyEYUZlSLvxiVmLCn_iXtZVCNSRdhdBwVs1kdldkz15NeYV8-ZtDufmMkKhxu7XlLNmJ19eIZ6X","expirationTime":null,"keys":{"p256dh":"BEUJ-GmRXN2y__8UdiGqKj8p7Iz393PYiS-o-6zTFVnL02TjXuTBGn69NnAHWN25GBV2hWeeOoHD-XkMkxAPbV8","auth":"fjoLwxiOmwgtJqp1woQKEQ"}}"
			}, 0);
		}

	});
});