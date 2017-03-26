# Structure of the Angular Rails App

```
/app
  /assets
    /javascripts
      app.js        # calls the main module and its dependencies once
      routes.js     # mounts on the main module the .config with all routes
      /home
        home.controller.js
      /cities
        cities.controller.js

```
