import Ember from 'ember';

export default Ember.Route.extend ({
  model() {
    return this.store.findAll('rental');
  },
});

//store refers to Firebase data store , findAll method has the argument rental tells ember to find all recrods
//in the store.

//Ember and firebase have a built in functionality to understand pluralization. the argument here says rental
//while the firebase file is called rentals.
