# umi-electron-boilerplate

A simple boilerplate for starting umijs in electron.

Project is in two parts, found in the source folder. Each builds into the app folder's dist.
The ./app then acts as a single electron app.


In src, the ./src/main creates electron app and its windows. All electron stuff should be done here. It is run with roadhog


The ./src/renderer is the umijs app. The main content of your project is here. You can initialize your own umi app with create-umi and replace the contents of renderer with your app.

The default umi app has typescript support, and dva but not antd.

Take not of the publicPath in .umirc.js.