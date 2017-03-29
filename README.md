# README

This app is meant to enable to
- list cities
- add places to cities
- create lists/tracks/selections from cities'places

## How to install
- run 'rails bower:install' to install angular dependencies
- run 'bundle install' to install gems
- run 'rake db:migrate'

### When pushing to heroku
- Strict DI is enabled to fix dependency injection
- run 'heroku run rake db:migrate'

## About this app
- Each model has its own folder in 'app/assets/javascripts'
- Each folder contains controllers, a factory, components, and html elements (that can also be used as ng-include or components)

### Dev notes
- Make sure to restart the rails server after modifying any angular. mounter element (component, controller, factory...)
