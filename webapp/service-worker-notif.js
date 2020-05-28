/*
self.addEventListener('push', event => {
  let body;

  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Default body';
  }

  const options = {
    body: body,
    icon: 'images/photo3D.jpg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Aceptar',
        icon: 'images/checkmark.png'},
      {
        action: 'close',
        title: 'Reasignar',
        icon: 'images/xmark.png'}
    ]
  };

  event.waitUntil(
    self.registration.showNotification(body || 'Push Notification', options)
  );
});*/

/*  self.addEventListener("push", (e) => {
    e.waitUntil(
      self.registration.showNotification(e && e.data && e.data.text() || "ABC", {})
      );
  });*/


/*  self.addEventListener("push", (e) => {
    e.waitUntil(
      self.registration.showNotification("test message", {})
      );
  });*/



  self.addEventListener('push', event => {
  let body;

  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Default body';
  }

  const options = {
    body: body,
    icon: 'images/photo3D.jpg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Aceptar',
        icon: 'images/checkmark.png'},
      {
        action: 'close',
        title: 'Reasignar',
        icon: 'images/xmark.png'}
    ]
  };

  event.waitUntil(
    self.registration.showNotification(body || 'Push Notification', options)
  );
});