# Android වැඩකාරයෝ app

![logo ](/logo.png)

This application is a GhostCMS client built using [React Native](https://reactnative.dev) for Android Wadakarayo.

## Installation

### Pre built

Download the latest pre-packaged version from [Google Play](https://play.google.com/store/apps/details?id=com.androidwedakarayo).

### Build yourself (Android)

1. For this you first need to install React Native on your system.
2. Install node and npm.
3. Clone this project.
4. Install the dependencies.

```bash
npm install
```

5. Go to Firebase and create a new project.
6. Configure a new Android project.
7. download and place google-services.json file in ` android/app` folder.
8. Create a new key store using Java ` keytool`.
9. Fill Keystore information on `android/gradle.properties`
10. Run `npx react-native run-android --variant=release` (This command will only execute successfully when you have have valid keystore credentials)

(You need an Android device running Android 5.0 or later plugged in to your machine or an emulator for this to work.)

### Build yourself (iOS)

This project is not configured to run on iOS yet. Therefore a bit more work is needed. You also need a Mac to build the iOS binary.

1.  `cd ios && pod install`
2.  Configure [react-navigation](https://reactnavigation.org/docs/getting-started/) and [react-native-firebase](https://rnfirebase.io/)
3.  Follow instructions on [React Native docs](https://reactnative.dev/docs/0.64/publishing-to-app-store) to build an iOS binary.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

This project uses semver (major.minor.patch) use ` npm version` command to version this app. Native files would be updated automatically using `react-native-version`

## License

[MIT](https://choosealicense.com/licenses/mit/)
