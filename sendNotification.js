const messaging = require('./firebaseService');

const sendNotification = async (registrationToken, title, body) => {
  console.log('Registration Token:', registrationToken);
  console.log('Title:', title);
  console.log('Body:', body);

  const message = {
    notification: {
      title: title,
      body: body,
    },
    token: registrationToken, // The recipient's device registration token

    // Android-specific options
    android: {
      priority: 'high',
      notification: {
        sound: 'default', // Add sound if needed
        color: '#f45342', // Custom color for Android notification
      },
    },

    // iOS-specific options
    apns: {
      payload: {
        aps: {
          alert: {
            title: title,
            body: body,
          },
          sound: 'default', // iOS notification sound
        },
      },
    },

    // Time to live for the notification (optional)
    ttl: 3600, // 1 hour in seconds (you can adjust this as needed)
  };

  try {
    const response = await messaging.send(message);
    console.log('Successfully sent message:', response);
  } catch (error) {
    console.error('Error sending message:', error.message);
  }
};

module.exports = sendNotification;
