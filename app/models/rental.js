import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  city: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr(),
  reviews: DS.hasMany('review', { async: true }),
  cost: DS.attr()
});
//the DS stands for Data store , and the attr stands for attribute
