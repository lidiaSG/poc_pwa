(function() {
  "use strict";

  const CACHE_NAME_NOTIF = "pwa-ui5-todo-v1.0.07";

  Notification.requestPermission(function(status) {
      console.log('Notification permission status:', status);
  });

  // Preload some resources during install
  self.addEventListener("install", function(event) {
    /*event.waitUntil(
    );*/
  });

  // Delete obsolete caches during activate
  self.addEventListener("activate", function(event) {
    /*event.waitUntil(
      caches.keys().then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (key !== CACHE_NAME_NOTIF) {
            return caches.delete(key);
          }
        }));
      })
    );*/
  });

  function displayNotification() {
    if (Notification.permission == "granted") {
      navigator.serviceWorker.getRegistration().then(function(reg) {
        var oNotificationData = {
          body: "Here is a notification body!",
          icon: "images/example.png",
          vibrate: [100, 50, 100],
          data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
          },
          actions: [
            {
              action: "explore",
              title: "Explore this new world",
              icon: "images/checkmark.png"
            },
            {
              action: "close",
              title: "Close notification",
              icon: "images/xmark.png"
            }
          ]
        };

        reg.showNotification("Hello world!", oNotificationData);
      });
    }
  }


  self.addEventListener("push", function(oPushEvent) {
    var oNotificationData = {
      body: "This notification was generated from a push!",
      icon: "images/example.png",
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: "2"
      },
      actions: [
        {
          action: "explore",
          title: "Explore this new world",
          icon: "images/checkmark.png"
        },
        {
          action: "close",
          title: "Close",
          icon: "images/xmark.png"
        }
      ]
    };

    // Wrapping the showNotification within the waitUntil
    // This extends the lifetime of the push event until the showNotification promise resolves
    // Here, the waitUntil method ensures the service worker doesn't terminate before an asynchronous operation is completed
    oPushEvent.waitUntil(
      self.registration.showNotification("Hello world!", oNotificationData)
    );
  });




  // 1. Register
  if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(function(reg) {
    console.log("Service Worker Registered!", reg);

    reg.pushManager.getSubscription().then(function(sub) {
      if (sub === null) {
        // Update UI to ask user to register for Push
        console.log("Not subscribed to push service!");
      } else {
        // We have a subscription, update the database
        console.log("Subscription object: ", sub);
      }
    });
  })
   .catch(function(err) {
    console.log("Service Worker registration failed: ", err);
  });
}



//navigator.serviceWorker.getRegistration().then(function(reg) { debugger; reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: (urlB64ToUnit8Array(sApplicationServerPublicKey)) }).then(function(sub) { debugger; console.log("XXXXXXX: sub"); }); });

  // During runtime, get files from cache or -> fetch, then save to cache
  /*self.addEventListener("fetch", function(event) {
  });*/
}());
