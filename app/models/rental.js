import DS from 'ember-data';
//same attributes we included in our hard-coded/orjson array of javascript objects owner, city, type, image, beedrooms
export default DS.Model.extend({    //this line is telling it to exported and saved to our database
  owner: DS.attr(),
  city: DS.attr(),
  type: DS.attr(),
  image:DS.attr(),
  bedrooms: DS.attr(),
  reviews: DS.hasMany('review', {async: true})
});

//the DS stands for Data store , and the attr stands for attribute
