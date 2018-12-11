# react-native-tydligval

Another React Native picker library with blurry background

## usage

On your project root:

`yarn add react-native-tydligval`

### properties - must

- source {String} The source of the background image which is either local or remote (https)
- key {String} React element key
- onSelect {Function} Callback that receives the `selected` and calls your custom callback
- items {Array} The list of items to iterate over and render

### properties - optional (otherwise falling back to the defaults)

- color {String) Color for default controls
- triggerButton (Function) Callback that receives `items` `onPress` `selected` and should return your custom trigger {ReactElement}
- selectButton (Function) Callback that receives `item` `onSelect` and should return your custom select button which is the list item itself {ReactElement}
- closeButton (Function) Callback that receives `onClose` and should return your custom close button and also call the onClose() event {ReactElement}

## React Native example app

https://github.com/joshycube/react-native-tydligval-example-app

### screenshots

![iphone example 1](https://github.com/joshycube/react-native-tydligval-example-app/blob/master/screenshots/ios_example_1.png)
![iphone example 2](https://github.com/joshycube/react-native-tydligval-example-app/blob/master/screenshots/ios_example_2.png)
![android example 1](https://github.com/joshycube/react-native-tydligval-example-app/blob/master/screenshots/android_example_1.png)
![android example 2](https://github.com/joshycube/react-native-tydligval-example-app/blob/master/screenshots/android_example_2.png)
![iphone and android](https://github.com/joshycube/react-native-tydligval-example-app/blob/master/screenshots/android_and_ios.png)
