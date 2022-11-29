import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAQf3jLXaobJtf3uzJHk7yZnIWOBjkFiLU",
  authDomain: "test-push-noti-70da8.firebaseapp.com",
  projectId: "test-push-noti-70da8",
  storageBucket: "test-push-noti-70da8.appspot.com",
  messagingSenderId: "977553233212",
  appId: "1:977553233212:web:22396f2428361bc54f3a39"
};


function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
        "BNBoCxeMOKUHL2lo5kGKFzAsGA7LsD_yHrwpX-bUOY1vGPVObMW1OdTFI8WXjeNc93JI6U3bmez0lB6wC2XFZhk",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
        } else {
          console.log("Can not get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();
