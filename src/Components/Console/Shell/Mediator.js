import React from 'react'
var Mediator = (function(){
    var responses = {};

    var subscribe = function(response, fn) {
        if (!responses[response]) {
            responses[response] = [];
        }

        responses[response].push( {context: this, callback: fn} );
    }

    var publish = function( response) {
        var args;
        if (!responses[response]) {
            return false;
        }
        args = Array.prototype.slice.call( arguments, 1);

        for (var i = 0, l = responses[response].length; i < l; i++) {
            var subscription = responses[response][i];
            subscription.callback.apply( subscription.context, args );
        }
        return this;
    }

    return {
        publish: publish,
        subscribe: subscribe,
        installTo: function ( obj ) {
            obj.subscribe = subscribe;
            obj.publish = publish;
        }
    }
}());

export default Mediator;