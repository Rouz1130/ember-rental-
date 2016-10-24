import Ember from 'ember'; //gives us acess to Ember.js library with var 'ember'
import config from './config/environment'; //provdies acess to our apps configuration data as the var 'config'

// defines a constant called router(a constant is a router that cannot be re-assigned)
const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
});

export default Router; //allows the constant 'Router' avaliable to all parts of the application
