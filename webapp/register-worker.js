(function() {
  "use strict";

  /**
   * Register the service worker
   */
  if ("serviceWorker" in navigator) {
    // Example service worker without notifications
    //navigator.serviceWorker.register("./service-worker.js", {scope: "/webapp"})
    /*navigator.serviceWorker.register("./service-worker.js").then(() => {
      console.log("Service Worker Registered");
    });*/

    // Service worker with notifications
    navigator.serviceWorker.register("./service-worker-notif.js").then(() => {
      console.log("Notification Service Worker Registered");
    });
  } else {
    alert("NO SERVICE WORKER");
  }
}());
