import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
  },

  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },

    update(rental, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !===undefined) {
          rental.set(key.params[key]);
        }
      });
      rental.save();
      this.transitionTo('index');
    },

    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
//store refers to Firebase data store , findAll method has the argument rental tells ember to find all recrods
//in the store.

//Ember and firebase have a built in functionality to understand pluralization. the argument here says rental
//while the firebase file is called rentals.
