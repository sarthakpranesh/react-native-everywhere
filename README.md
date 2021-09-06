
# React Native Everywhere

### Expo ( Android + Web + iOS ) + Tauri ( Desktop ) = ♥

<br />

## What is RNE?

RNE is a template I made to help me build Beautiful, Efficient, and write once run everywhere apps with Expo (React Native) building to Android, iOS and Web along with Desktop support using [Tauri](https://github.com/tauri-apps/tauri). This template includes some common libraries and configurations that I find myself using in almost all React Native project.

Beware: I am using libraries and configuration the way I like the most, your choices and the most efficient way to do it might differ. Also this is work in progress :>

<br />

## Whats included
The most relevant list of packages included in the template are as follows:
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [React Navigation](https://reactnavigation.org/)
- [Redux](https://redux.js.org/) along with `redux-logger` and `redux-persist`
- [react-redux](https://react-redux.js.org/)
- [React Native Async Storage](https://react-native-async-storage.github.io/async-storage/docs/install/)
- [Tauri](https://github.com/tauri-apps/tauri)

<br />

## Using the template
### Initial changes
Okay you have to go on a renaming/changing/description spree..., please rename the app in the following configs:
- change all the relevant fields to your project specific details in `/app.json` and `./src-tauri/tauri.conf.json` 
- change the app icons both in `assets` and `src-tauri/icons` 

Now its time you build your app :>

### Working 
Their are multiple scripts in the `package.json`, most of them are just the default once that come with tauri and expo so I won't be documenting them. You can find below the general flow of development for desktop apps though.

For developing desktop app their are actually two steps, they are as follows:
- tauri depends on a web bundler like `webpack` so we first start our expo web development server using `yarn web` and we leave it running
- open another terminal and now we can run `yarn desktop` that will start our tauri app in development mode

For building desktop app we employee a similar approach:
- we first build our web version of the app using `yarn build-web`
- once the web version is build we use `tauri` to package the web app using `yarn build-desktop`

<br />

## Issues
Enjoy the errors they are a feature :P ( kidding open an issue/improvements [here](https://github.com/sarthakpranesh/react-native-everywhere/issues))
