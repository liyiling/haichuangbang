Template.trending.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('products');
    this.subscription = Meteor.subscribe('shares');//
  }.bind(this));
};

Template.trending.rendered = function () {
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
};

Template.trending.helpers({
  // products: function () {
  //   return Products.find({}, {sort: {numberOfVotes: -1, name: -1}});
  // }
  shares:function(){
        return Shares.find({},{sort:{createdAt:-1}});
    }
});
