import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rentals: this.store.findAll('rental'),
      reviews: this.store.findAll('review')
    });
  },
  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
    // saveReview(params) {
    //   var newReview = this.store.createRecord('review', params);
    //   newReview.save();
    //   this.transitionTo('index');
    // }
  }
});
//store refers to Firebase data store , findAll method has the argument rental tells ember to find all recrods
//in the store.

//Ember and firebase have a built in functionality to understand pluralization. the argument here says rental
//while the firebase file is called rentals.
