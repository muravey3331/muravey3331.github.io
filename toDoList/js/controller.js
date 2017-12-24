define(
    'controller',
    ['model', 'view'],

    function () {
      function Controller(model, view) {
        var self = this;

        view.elements.addBtn.on('click', addItem);
        view.elements.listContainer.on('click', '.delete-button', removeItem);
        view.elements.listContainer.on('click', '.change-button', changeItem);
        view.elements.replaceBtn.on('click', replaceItem);

        function addItem() {
          var newItem = view.elements.input.val();
          model.addItem(newItem);
          view.renderList(model.data);
          view.elements.input.val('');
        }

        function removeItem() {
          var item = $(this).attr('data-value');
          model.removeItem(item);
          view.renderList(model.data);

        }

        // replace

        var oldValue;

        function changeItem() {

          oldValue = $(this).attr('data-value');
          view.elements.input.val(oldValue);
          view.showReplaceBtn();
        }

        function replaceItem() {
          var changedItem = view.elements.input.val();

          model.replaceItem(oldValue, changedItem);
          view.showAddBtn();
          view.renderList(model.data);
          view.elements.input.val('');
        }

      }

      return Controller;
    });