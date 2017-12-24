define(
    'view',
    ['jquery', 'model'],
    function () {

      function View(model) {
        var self = this;

        function init() {
          var wrapper = tmpl($('#wapper-tmpl').html());

          $('body').append(wrapper);

          self.elements = {
            input: $('.item-value'),
            addBtn: $('.item-add'),
            changeBtn: $('.change-button'),
            replaceBtn: $('.item-replace'),
            listContainer: $('.list-item')
          };

          self.renderList(model.data);
        }

        self.showAddBtn = function(){
          console.log('hello2');
          $('.item-add').addClass('active');
          $('.item-replace').removeClass('active');
        };

        self.showReplaceBtn = function(){
          console.log('hello1');
          $('.item-replace').addClass('active');
          $('.item-add').removeClass('active');
        };

        self.renderList = function (data) {
          var list = tmpl($('#list-tmpl').html(), {data: data});
          self.elements.listContainer.html(list)

        };

        init();
      }

      return View;
    });