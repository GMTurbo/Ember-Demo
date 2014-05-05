
var App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.ApplicationAdapter = DS.RESTAdapter.extend();

DS.RESTAdapter.reopen({
  host: 'http://localhost:3000'
});

App.Product = DS.Model.extend({
  title: DS.attr('string'),
  price: DS.attr('number'),
  description: DS.attr('string'),
  isOnSale: DS.attr('boolean'),
  image: DS.attr('string'),
  reviews: DS.hasMany('review', {async: true}),
  crafter: DS.belongsTo('contact', {async: true})
});

App.Review = DS.Model.extend({
  text: DS.attr('string'),
  reviewedAt: DS.attr('date'),
  product: DS.belongsTo('product')
});

App.Contact = DS.Model.extend({
  name: DS.attr('string'),
  about: DS.attr('string'),
  avatar: DS.attr('string'),
  products: DS.hasMany('product', {async:true})
});

/*
App.Product.FIXTURES = products;
App.Contact.FIXTURES = contacts;
App.Review.FIXTURES = reviews;
*/

App.Router.map(function(){
	this.route('about');
	this.route('credits', {path:'/thanks'});
	this.resource('products');
	//old
	//this.resource('product', {path:'/products/:title'});
	//new nested format
	this.resource('products', function(){
	  this.resource('product', {path:'/:product_id'});
	});
	this.resource('contacts', function(){
	  this.resource('contact', {path:'/:contact_id'});
	});
	
});

App.IndexController = Ember.Controller.extend({
  productsCount: 6,
  logo: '/images/logo.png',
  time: function(){
    return (new Date()).toDateString();
  }.property()
});

App.ContactIndexController = Ember.Controller.extend({
  contactName: 'Anostagia',
  avatar: 'images/anostagia.png',
  open: function() {
    return ((new Date()).getDay() === 0) ? "Closed" : "Open";
  }.property()
});

App.ProductsRoute = Ember.Route.extend({
  model: function(){
    return this.store.findAll('product')
  }
});
/*
App.ProductRoute = Ember.Route.extend({
  model: function(params){
    console.dir(params);
    return this.store.find('product', params.product_id);
  }
});
*/
App.ContactsRoute = Ember.Route.extend({
  model: function(){
    return this.store.findAll('contact');
  }
});

/*
App.ContactRoute = Ember.Route.extend({
  model: function(params){
    return App.CONTACTS.findBy('name', params.name);
  }
});
*/

