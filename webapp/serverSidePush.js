let oWebPushClient = require("web-push");

let oVapIdKeys = {
  publicKey: "BCG64b9sGLKTY_m-LL1JTxbDd1s5GJFLWqszo2qsEQkX19cpB8x9Wq8jwf_tw0eMOcASY75IPImIyBw_5sgp5dI",
  privateKey: "qqStHHdyoS6epmi-mg2TXV4a6XoTn6o0n88jfWE7sIk"
};

oWebPushClient.setVapidDetails(
  "mailto:lidia.sarasua@enzymeadvisinggroup.com",
  oVapIdKeys.publicKey,
  oVapIdKeys.privateKey
);

// This would be retrieved from database
let oSubscriptionData = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/ezcBqUhNMmY:APA91bG0EYLuJMkez3fMlA0d2K9B4tb5_sYgOOXDGhcjt81ItGop5cST3QIiCdXI3bNp9XwOg-YJ1zL7XDhUQpFduOhbeFUF2SI5a4uyiuwpFBmIuLDabL7M224W3qbdvZshe88GsjxM",
  "expirationTime": null,
  "keys": {
    "p256dh": "BLfM-0rEAzib6Jfc2TRSeCUYu8ujNkgsPpX5S4IXrAchZc0ZzhgbrnA204U7TXLpyHMQGYvt7oCmTsgEMiJiL2Q",
    "auth": "JK3ynV6JiuhG40svC6-dmg"
  }
};

oWebPushClient.sendNotification(oSubscriptionData, "test message");
