# Structure of the Angular Rails App

```
/app
  /assets
    /javascripts
      app.js        # calls the main module and its dependencies once
      routes.js     # mounts on the main module the .config with all routes
      /home
        home.controller.js
        home.html
      /cities
        cities.controller.js
        cities.html
      /components
        /tab-component
          tab.component.js
          pane.component.js
        /cities
          cities.component.js
          cities.html
        /create-city
          create-city.component.js
          create-city.html
      /factories
        cities.factory.js

```

Questions:
- should I use nested routes from the HP?
- ng-include for the navbar (from a /shared folder ?)

Things to know
- make a tabs layout (2:40 Luke)
- create a factory to create tons of methods to communicate with your rails controller and get data you need (3:10 Luke)
- use the factory from a component's controller to get and show the data
- in the view use {{}} or ng-bind to show the data from the component's controller
- component to create (3:10 Luke)

Learnings:
- Controllers serve the UI/view logic
- A controller is a constructor function that's initialized as an object; this object has a scope in the DOM, that defined where it is accessible; we can in this scope access the properties of this controller object (values or functions). controllerAs enable to save the controller instance into a variable like "vm".
- Services are view-independent, it is good practice to move view-independent logic from the controller into a service/factory, so it can be reused by other parts of the application as well. A factory is an object, that return{}.
