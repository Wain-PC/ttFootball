Meteor.methods({
    'rowAdd': function (doc) {
    },

    'rowEdit': function (doc, rowId) {

    }
});


function notifyClient(params) {
    console.log("$$$---Notifying client with:", params);
    //throw new Meteor.Error(params.type || 'info', params.title || '', {message: params.message || '', options:  params.options || {}});
}