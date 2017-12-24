requirejs.config({
  paths:{
    'jquery': "http://code.jquery.com/jquery-1.12.0.min",
    'tmpl': 'tmpl'

  },
  shim:{
    'jquery':{
      exports: 'jQuery'
    },
    'tmpl': {
      exports: 'tmpl'
    }
  }
});

require(
    ['jquery', 'tmpl', 'model', 'view', 'controller'],

    function($, tmpl, Model, View, Controller){

      var firstToDoList = ['Learn HTML', 'Learn JS', 'Find a good job'];
      var model = new Model(firstToDoList);
      var view = new View(model);
      var controller = new Controller(model, view);
    }
);

