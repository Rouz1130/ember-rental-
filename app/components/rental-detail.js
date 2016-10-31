import Ember from 'ember';

export default Ember.Component.extend({
  //computed properties to sort by reviews: desc= descending order and now we
  //can call sortedReviews instead of rental.reviews.
  sortBy: ['rating:desc'],
  sortedReviews: Ember.computed.sort('rental.reviews', 'sortBy'),

  actions: {
    delete(rental) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    },
    destroyReview(review) {
      this.sendAction('destroyReview', review);
    }
  }
});
