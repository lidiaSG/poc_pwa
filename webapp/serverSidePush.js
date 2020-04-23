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
// PC
//let oSubscriptionData = {"endpoint":"https://fcm.googleapis.com/fcm/send/csZq_oJDSW8:APA91bF9cImJuHzpbXlBfh2SNdbzPFtP1m-36SniPuoElbrsVEnP1heYmfKAlxzWF-00QE7OWFSXcZHlWDrAK5eH0cWam8t8luDqw_2lj1uKP65aQfWFW9jvTmN9d3vYjAiGyNmhBYE7","expirationTime":null,"keys":{"p256dh":"BKR9oZLApBfimvh7GFZ-pmo2sLajvE3UfpFg49wutEax9ZbDkwqZws8FHJ2deQhZ6MIvORgsoXoOiZkBJwCyImU","auth":"jgKPJlIUiz8MwXmTSAssLg"}};

// Phone
let oSubscriptionData = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/fGown-mjOD8:APA91bHJhGxwA63agcw0JoslIQqVtJ_vNW4YfAGikhVCvWyDfl9PSmGLQSDJVZpv0QD-nQ5LUQrSdHXMiQvOEAeADuy6tpYt5QVJ-oYVek-l9tV3Tetsqc-bp8I4ye1ibN0oOFoW53uy",
  "expirationTime": null,
  "keys": {
    "p256dh": "BBTgpYXo0U_zDS2a3RlGksC3vCmfeFMJ7aZtAUHePOFC81qy3KwRK3lg8PwBksMc6p1qep1CDU65gk86RSyW9fQ",
    "auth": "lF8oU8qbe0RW6lbDOlY3iA"
  }
};

oWebPushClient.sendNotification(oSubscriptionData, "test message notified");
