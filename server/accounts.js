Meteor.startup(function() {
	//与登陆相关
  // ServiceConfiguration.configurations.remove({service: 'meteor-developer'});
  // ServiceConfiguration.configurations.insert({
  //   service: 'meteor-developer',
  //   clientId: Meteor.settings.meteorDeveloper.clientId,
  //   secret: Meteor.settings.meteorDeveloper.secret
  // });
});

Accounts.onCreateUser(function(options, user) {
	//与登陆相关
  // user.emails = user.services['meteor-developer'].emails;
  // user.profile = options.profile;
  return user;
});
