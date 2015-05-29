Meteor.users.before.insert(function (userId, doc) {
  // doc.profile.votedProductIds = [];
  //为什么要注销？与登陆相关
});

Meteor.users.helpers({
  votedProducts: function () {
    return Products.find({_id: {$in: this.profile.votedProductIds}});
  }
});
