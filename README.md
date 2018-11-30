# react-native-tydligval

Another react native picker library with blurry background

# usage

On your project root:

`yarn add react-native-tydligval`

## properties - must

- source {String} The source of the backround image which is either local or remote (https)
- key {String} React element key
- onSelect {Function} Callback that receives the `selected` and calls your custom callback {Function}
- items {Array} The list items to iterate over and render

## properties - optional (otherwise falling back to the defaults)

- color {String) Font and SVG color for default controls
- triggerButton (Function) Callback that receives `items` `onPress` `selected` and should return you custom trigger {ReactElement}
- selectButton (Function) Callback that receives `item` `onSelect` and should return you custom select button which is the list item itself {ReactElement}
- closeButton (Function) Callback that receives `onClose` and should return you custom close button and also call the onClose event {ReactElement}

# react native example app with one default and one custom Picker

https://github.com/joshycube/react-native-tydligval-example-app
