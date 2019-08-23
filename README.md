# expo-detox-typescript-example  

Sample React-Native application with e2e tests using:
* Expo SDK v33
* [detox](https://github.com/wix/detox) 12.3.0
* [detox-expo-helpers](https://github.com/expo/detox-expo-helpers)
* [expo-detox-hooks](https://github.com/expo/detox-tools)
* jest
* typescript

## Demo
<img src="https://raw.githubusercontent.com/yaron1m/expo-detox-typescript-example/master/example.gif"/>

## Installation instructions
1. Follow **Step 1** (install dependencies) from detox [Getting Started](https://github.com/wix/detox/blob/master/docs/Introduction.GettingStarted.md#step-1-install-dependencies) guide
2. Download Expo iOS client by running `npm run dl_expo_bins`
3. Install the project dependencies by running `npm install`.
4. Start the application by running `npm start`.
5. In another terminal, run `npm run e2e` to run the tests.

## FAQ
**Can I use a newer version of detox?**

For some reason, expo and detox are not working well together with detox version newer than 12.3.0.

There is an open issue [here](https://github.com/wix/Detox/issues/1422)

**How can I help?**

Starring this project would help others find it and set up detox with Expo easier.
