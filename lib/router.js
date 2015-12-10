Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});


Router.map(function() {
    this.route('rowsList', {
        path: '/',
        name: 'rows.list'
    });


});



var requireLogin = function () {
    if (!Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('login');
        }
    } else {
        this.next();
    }
};

Router.onBeforeAction(requireLogin);
