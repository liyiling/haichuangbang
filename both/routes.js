Router.route('/', {
  name: 'signin'
});

Router.route('/trending', {
  name: 'trending'
});

Router.route('/recent', {
  name: 'recent'
});

//随手贴
Router.route('/paste', {
  name: 'paste'
});

Router.route('/products/:_id', {
  name: 'products.show'
});

Router.route('/users/:_id', {
  name: 'users.show'
});

Router.route('/notifications', {
  name: 'notifications'
});

Router.route('/profile', {
  name: 'profile'
});
