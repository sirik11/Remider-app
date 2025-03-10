Reminder App

Overview

The Reminder App is a simple and intuitive application designed to help users set and manage reminders efficiently. Users can add, update, and delete reminders, ensuring they never miss important tasks or events.

Features

Create Reminders – Add reminders with title, description, and time.

Edit Reminders – Modify existing reminders as needed.

Delete Reminders – Remove completed or unnecessary reminders.

Notification Alerts – Receive notifications when a reminder is due.

User-Friendly UI – Simple and clean interface for easy navigation.

Tech Stack

Frontend: React Native

Backend: Firebase (Firestore for database, Firebase Authentication)

State Management: React Context API

Notifications: Firebase Cloud Messaging (FCM)

Installation

Prerequisites

Node.js (latest stable version)

React Native CLI or Expo CLI

Firebase Account

Setup Steps

Clone the Repository:

git clone https://github.com/sirik11/Remider-app.git
cd Remider-app

Install Dependencies:

npm install

Configure Firebase:

Create a Firebase project at Firebase Console.

Enable Firestore, Firebase Authentication, and Cloud Messaging.

Download the google-services.json file (for Android) and GoogleService-Info.plist (for iOS) and place them in the appropriate directories.

Run the App:

For Android:

npx react-native run-android

For iOS:

npx react-native run-ios

Usage

Open the app and sign in using Firebase Authentication.

Create a new reminder by entering a title, description, and time.

Receive notifications when the reminder is due.

Modify or delete reminders as required.

Contributing

Contributions are welcome! Follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature-branch).

Make changes and commit (git commit -m "Added new feature").

Push the changes (git push origin feature-branch).

Open a Pull Request.

License

This project is licensed under the MIT License.

Contact

For any questions or suggestions, feel free to reach out to sirik11.

